<template>
  <Modal
    :open="modalVisible"
    title="URL 配置"
    @cancel="modalVisible = false"
    @ok="onOk">
    <Form :mode="formValues">
      <FormItem
        label="url"
        name="url">
        <Input
          placeholder="主屏访问地址"
          v-model:value="formValues['url']"></Input>
      </FormItem>
      <FormItem
        label="subUrl"
        name="subUrl">
        <Input
          placeholder="副屏访问地址"
          v-model:value="formValues['subUrl']"></Input>
      </FormItem>
    </Form>
  </Modal>
</template>

<script lang="ts" setup>
import { Form, Input, FormItem } from "ant-design-vue";
import { onMounted, ref } from "vue";
import { useUrlModalStore } from "./store";
import { watch } from "vue";
import { Modal } from "ant-design-vue";
const store = useUrlModalStore();

const modalVisible = ref(false);

onMounted(() => {
  // 接受壳子的消息传递
  window.ipcRenderer.on("open-url-setting-modal", () => {
    modalVisible.value = true;
  });
  // 和iframe 通信
  window.addEventListener("message", function (event) {
    // 检查消息类型是否为可设置
    if (event.data === "BOTTLE_OPEN_URL_MODAL") {
      // 执行打开设置模态框的操作
      modalVisible.value = true;
    }
  });

  // 如果没有设置任何默认地址，弹窗设置
  if (!store.url || !store.subUrl) {
    modalVisible.value = true;
  }
});

const onOk = () => {
  store.url = formValues.value.url;
  store.subUrl = formValues.value.subUrl;
  modalVisible.value = false;
};

const formValues = ref<{
  url: string;
  subUrl: string;
}>({} as any);

watch(
  () => store.url,
  () => {
    formValues.value.url = store.url;
    formValues.value.subUrl = store.subUrl;
  },
  { immediate: true }
);
</script>
