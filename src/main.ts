import { createApp } from "vue";
import App from "./App.vue";

import "./style.css";

import "./demos/ipc";
import { store } from "./components/pinia";
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

const app = createApp(App);
app.use(store);
app.mount("#app").$nextTick(() => {
  postMessage({ payload: "removeLoading" }, "*");
});
