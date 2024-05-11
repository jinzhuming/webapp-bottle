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
  const displays = screen.getAllDisplays();
  // bounds.x 是 0 就是主显示器
  // const externalDisplays = displays.filter((display) => {
  //   return display.bounds.x !== 0 || display.bounds.y !== 0;
  // });
  const externalDisplays = displays;

  for (let i = 0; i < externalDisplays.length; i++) {
    if (!externalDisplays[i]) return;
    wins.push(
      new BrowserWindow({
        title: "Main window",
        icon: path.join(process.env.VITE_PUBLIC, "favicon.ico"),
        webPreferences: {
          preload,
          // Warning: Enable nodeIntegration and disable contextIsolation is not secure in production
          // nodeIntegration: true,

          // Consider using contextBridge.exposeInMainWorld
          // Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
          // contextIsolation: false,
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
    // win.setAlwaysOnTop(true, "screen-saver"); // Keep on top of other windows
    // win.setResizable(false); // Prevent resizing
    // win.setMovable(false); // Prevent moving
    // win.setFullScreen(true);

    if (i === 1) {
      // Second window settings
      // win.setAlwaysOnTop(true, "screen-saver");
      // win.setResizable(false);
      // win.setMovable(false);
      // win.setFullScreen(true);
      // win.setFocusable(false);
    }
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

  globalShortcut.register("CommandOrControl + shift + k", () => {
    // 在这里执行你想要的操作，例如剪切文本
    wins?.[0]?.webContents.send("open-url-setting-modal");
  });
  globalShortcut.register("CommandOrControl + shift + p", () => {
    // 在这里执行你想要的操作，例如剪切文本
    wins?.[0]?.webContents.send("open-setting-modal");
  });

  ipcMain.handle("set-window-attr", (_, dataMap) => {
    if (!dataMap) return;
    wins.forEach((win, winIndex) => {
      if (winIndex !== dataMap.index) return;
      win.setAlwaysOnTop(dataMap["setAlwaysOnTop"], "screen-saver"); // Keep on top of other windows
      win.setResizable(dataMap["setResizable"]); // Prevent resizing
      win.setMovable(dataMap["setMovable"]); // Prevent moving
      win.setFullScreen(dataMap["setFullScreen"]);
    });
  });

  // win.webContents.on('will-navigate', (event, url) => { }) #344
}

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
  });

  if (VITE_DEV_SERVER_URL) {
    childWindow.loadURL(`${VITE_DEV_SERVER_URL}#${arg}`);
  } else {
    childWindow.loadFile(indexHtml, { hash: arg });
  }
});
