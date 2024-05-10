<template>
  <Modal
    :open="modalVisible"
    title="URL 配置"
    @cancel="modalVisible = false"
    @ok="modalVisible = false">
    <Form :mode="formValues">
      <FormItem
        label="url"
        name="url">
        <Input
          placeholder="访问地址"
          v-model:value="formValues['url']"></Input>
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
  window.ipcRenderer.on("open-url-setting-modal", () => {
    modalVisible.value = true;
  });
});

const formValues = ref<{
  url: string;
}>({} as any);

watch(
  () => store.url,
  () => {
    formValues.value.url = store.url;
  },
  { immediate: true }
);
</script>
