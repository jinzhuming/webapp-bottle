<script setup lang="ts">
import { ref } from "vue";
import { Modal } from "ant-design-vue";
import SettingsModal from "./components/SettingsModal.vue";
import { useUrlModalStore } from "./components/store";
import UrlModal from "./components/UrlModal.vue";
import Loading from './components/Loading.vue'
const urlStore = useUrlModalStore();
const windowIndex = ref<number>(0);
const iframeKey = ref<number>(0)
const timer = ref()
const showLoading = ref(true)

const myIframe = ref<HTMLDivElement | null>(null);

// 监听来自主进程的消息
window.ipcRenderer.on("current-window-index", (e, index) => {
  if (typeof index === "number") {
    windowIndex.value = index;
  } else {
    windowIndex.value = 0;
  }
});
window.ipcRenderer.on("setting-change", (_, e) => {
  // @ts-ignore
  myIframe.value?.contentWindow.postMessage(
    JSON.stringify({ ...e, order: "SETTING_CHANGE_SUCCESS" }),
    "*"
  );
});
window.addEventListener('message', function (event){
  if (event.data === 'REFRESH_IFRAME') { 
  window.ipcRenderer.invoke("refresh");
  }
  if (event.data === 'ONMOUNTED') { 
    timer.value && clearInterval(timer.value);
    console.log('ONMOUNTED,iframe加载完毕')
  }
  if (event.data === 'LOADING_OVER') { 
    showLoading.value = false
    window.ipcRenderer.invoke("loadingOver");
    console.log('LOADING_OVER,接口请求成功')
  }
})
window.ipcRenderer.on("refresh", (_, e) => {
  iframeKey.value++
})

timer.value = setInterval(() => { 
  iframeKey.value++
  console.log("持续刷新页面", iframeKey.value)
}, 3000)

</script>

<template>
  <div class="container">
    <SettingsModal  :windowIndex="windowIndex"></SettingsModal>
    <UrlModal :windowIndex="windowIndex"></UrlModal>
    <Loading :key="+showLoading" v-if="showLoading" :loading="showLoading"/>
    <iframe
      v-show="!showLoading"
      ref="myIframe"
      :key="urlStore.url+urlStore.subUrl+iframeKey"
      :src="windowIndex === 0 ?urlStore.url :urlStore.subUrl"
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
