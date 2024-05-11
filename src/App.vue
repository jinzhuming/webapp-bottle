<script setup lang="ts">
import { ref } from "vue";
import { Modal } from "ant-design-vue";
import SettingsModal from "./components/SettingsModal.vue";
import { useUrlModalStore } from "./components/store";
import UrlModal from "./components/UrlModal.vue";
const urlStore = useUrlModalStore();
const windowIndex = ref<number>(0);

// 监听来自主进程的消息
window.ipcRenderer.on("current-window-index", (e, index) => {
  if (typeof index === "number") {
    windowIndex.value = index;
  } else {
    windowIndex.value = 0;
  }
});
</script>

<template>
  <div class="container">
    <SettingsModal :windowIndex="windowIndex"></SettingsModal>

    <UrlModal :windowIndex="windowIndex"></UrlModal>

    <!-- <img class="loading" src="./loading.gif" alt=""></div> -->
    <iframe
      v-if="urlStore.url"
      :key="urlStore.url"
      :src="urlStore.url"
      allowfullscreen
      allowpaymentrequest
      allowtransparency></iframe>
  </div>
</template>

<style>
.container,
.container iframe {
  width: 100vw;
  height: 100vh;
  position: relative;
  position: 1;
  z-index: 1;
}
.ant-modal-root {
  z-index: 2;
  position: relative;
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.btn {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
  width: 20px;
  height: 20px;
}
</style>
