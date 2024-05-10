<template>
  <Modal
    :open="visible"
    title="系统配置"
    @cancel="visible = false"
    @ok="onOk">
    <Form :mode="formValues">
      <FormItem
        label="是否显示在最上层"
        name="setAlwaysOnTop">
        <RadioGroup v-model:value="formValues['setAlwaysOnTop']">
          <Radio :value="true">是</Radio>
          <Radio :value="false">否</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem
        label="是否固定最大化"
        name="setResizable">
        <RadioGroup
          v-model:value="formValues['setResizable']"
          @change="onChange">
          <Radio :value="true">是</Radio>
          <Radio :value="false">否</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem
        label="是否可以移动"
        name="setMovable">
        <RadioGroup v-model:value="formValues['setMovable']">
          <Radio :value="true">是</Radio>
          <Radio :value="false">否</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem
        label="是否全屏"
        name="setFullScreen">
        <RadioGroup v-model:value="formValues['setFullScreen']">
          <Radio :value="true">是</Radio>
          <Radio :value="false">否</Radio>
        </RadioGroup>
      </FormItem>
    </Form>
  </Modal>
</template>

<script lang="ts" setup>
import { Form, Modal, RadioGroup, Radio, FormItem } from "ant-design-vue";
import { ref, unref } from "vue";
import { useSettingsModalStore } from "./store";
import { watch } from "vue";

const store = useSettingsModalStore();
const props = defineProps<{
  windowIndex: number;
}>();

const visible = ref(false);

const formValues = ref<{
  setAlwaysOnTop: boolean;
  setMovable: boolean;
  setFullScreen: boolean;
  setResizable: boolean;
}>({} as any);

const onChange = () => {
  store.settingsModal[`${props.windowIndex}`] = {
    ...(store.settingsModal[`${props.windowIndex}`] as any),
    ...formValues.value,
  };
};

const onOk = () => {
  visible.value = false;
  window.ipcRenderer.invoke("set-window-attr", unref({ ...formValues.value }));
};
window.ipcRenderer.on("open-setting-modal", () => {
  visible.value = true;
});

watch(
  () => store.settingsModal[props.windowIndex],
  () => {
    formValues.value = (store.settingsModal[props.windowIndex] ?? {}) as any;
  },
  { immediate: true }
);
</script>
