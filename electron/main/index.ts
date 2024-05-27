import { app, BrowserWindow, screen, shell, ipcMain } from "electron";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";
import os from "node:os";
import { globalShortcut } from "electron";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//
// ├─┬ dist-electron
// │ ├─┬ main
// │ │ └── index.js    > Electron-Main
// │ └─┬ preload
// │   └── index.mjs   > Preload-Scripts
// ├─┬ dist
// │ └── index.html    > Electron-Renderer
//
process.env.APP_ROOT = path.join(__dirname, "../..");

export const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
export const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");
export const VITE_DEV_SERVER_URL = process.env.VITE_DEV_SERVER_URL;

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, "public")
  : RENDERER_DIST;

// Disable GPU Acceleration for Windows 7
if (os.release().startsWith("6.1")) app.disableHardwareAcceleration();

// Set application name for Windows 10+ notifications
if (process.platform === "win32") app.setAppUserModelId(app.getName());

if (!app.requestSingleInstanceLock()) {
  app.quit();
  process.exit(0);
}

let wins: BrowserWindow[] = [];
const preload = path.join(__dirname, "../preload/index.mjs");
const indexHtml = path.join(RENDERER_DIST, "index.html");

async function createWindow() {
  // 移动到非主显示器
  const displays = screen.getAllDisplays().sort((a, b) => {
    if (a.bounds.x === 0) {
      return -1; // a 是主显示器，排在前面
    } else if (b.bounds.x === 0) {
      return 1; // b 是主显示器，排在前面
    } else {
      return 0; // 其他情况，维持原顺序
    }
  });

  const externalDisplays = displays;

  for (let i = 0; i < externalDisplays.length; i++) {
    if (!externalDisplays[i]) return;
    wins.push(
      new BrowserWindow({
        title: "Main window",
        icon: path.join(process.env.VITE_PUBLIC, "favicon.ico"),
        webPreferences: {
          preload,
        },
      })
    );
  }

  wins.forEach((win, i) => {
    const externalDisplay = externalDisplays[i];
    win.setBounds({
      x: externalDisplay.bounds.x,
      y: externalDisplay.bounds.y,
      width: externalDisplay.bounds.width,
      height: externalDisplay.bounds.height,
    });
    win.setMenu(null);
    win.on("leave-full-screen", (event) => {
      event.preventDefault();
    });

    win.on("blur", () => {
      // 检查是否其他窗口拥有焦点
      let hasFocus = wins.some((w, index) => index !== 0 && w.isFocused());

      // 如果没有其他窗口拥有焦点，则将焦点切换回主窗口
      if (!hasFocus) {
        wins[0].show();
        wins[0].focus();
      }
    });

    if (VITE_DEV_SERVER_URL) {
      // #298
      win.loadURL(VITE_DEV_SERVER_URL);
      // Open devTool if the app is not packaged
      win.webContents.openDevTools();
    } else {
      win.loadFile(indexHtml);
    }
    // Test actively push message to the Electron-Renderer
    win.webContents.on("did-finish-load", () => {
      win?.webContents.send("current-window-index", i);
    });

    // Make all links open with the browser, not with the application
    win.webContents.setWindowOpenHandler(({ url }) => {
      if (url.startsWith("https:")) shell.openExternal(url);
      return { action: "deny" };
    });
  });

  // // 发送消息给页面
  globalShortcut.register("CommandOrControl + shift + k", () => {
    wins?.[0]?.webContents.send("open-url-setting-modal");
  });
  globalShortcut.register("CommandOrControl + shift + p", () => {
    wins?.[0]?.webContents.send("open-setting-modal");
  });  

  ipcMain.handle("refresh", (_, val) => {
    wins.forEach((win) => {
      win.webContents.send("refresh", val);
    });
  });
  
  ipcMain.handle("set-window-attr", (_, dataMap) => {
    if (!dataMap) return;
    wins.forEach((win, winIndex) => {
      if (winIndex !== dataMap.index) return;
      win.setAlwaysOnTop(dataMap["setAlwaysOnTop"], "screen-saver"); // Keep on top of other windows
      win.setResizable(dataMap["setResizable"]); // Prevent resizing
      win.setMovable(dataMap["setMovable"]); // Prevent moving
      win.setFullScreen(dataMap["setFullScreen"]);
      win.setFocusable(true);
      

      

    });
  });

  
}

ipcMain.handle("setting-change", (_, val) => {
  wins?.[0]?.webContents.send("setting-change", val);
});

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  wins = [];
  if (process.platform !== "darwin") app.quit();
});

app.on("second-instance", () => {
  wins.forEach((win) => {
    if (win) {
      // Focus on the main window if the user tried to open another
      if (win.isMinimized()) win.restore();
      win.focus();
    }
  });
});

app.on("activate", () => {
  const allWindows = BrowserWindow.getAllWindows();
  if (allWindows.length) {
    allWindows[0].focus();
  } else {
    createWindow();
  }
});

// New window example arg: new windows url
ipcMain.handle("open-win", (_, arg) => {
  const childWindow = new BrowserWindow({
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false,
    },
    frame: false, // 或者 titleBarStyle: 'hidden'
    titleBarStyle: "hidden",
  });

  if (VITE_DEV_SERVER_URL) {
    childWindow.loadURL(`${VITE_DEV_SERVER_URL}#${arg}`);
  } else {
    childWindow.loadFile(indexHtml, { hash: arg });
  }
});
// 注册 Super 键的全局快捷键
// globalShortcut.register("Super", () => {
//   // 阻止默认行为
//   console.log("Super key pressed, but default action is prevented.");
//   wins?.[0]?.show();
//   wins?.[0]?.focus();
// });

// 在应用退出时注销快捷键
app.on("will-quit", () => {
  globalShortcut.unregister("Super");
  globalShortcut.unregisterAll();
});
