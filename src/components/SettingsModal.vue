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
      <!-- <FormItem
        label="是否可以移动"
        name="setMovable">
        <RadioGroup v-model:value="formValues['setMovable']">
          <Radio :value="true">是</Radio>
          <Radio :value="false">否</Radio>
        </RadioGroup>
      </FormItem> -->
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
import { onMounted, ref, unref } from "vue";
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
}>({} as any)

const onChange = () => {
  store.settingsModal[`${props.windowIndex}`] = {
    ...(store.settingsModal[`${props.windowIndex}`] as any),
    ...formValues.value,
  };
};

const onOk = () => {
  visible.value = false;
  window.ipcRenderer.invoke(
    "set-window-attr",
    unref({ ...formValues.value, index: props.windowIndex })
  );
  window.ipcRenderer.invoke("setting-change", unref({ ...formValues.value }));
};

onMounted(() => {
  // 接受主窗口打开事件
  window.ipcRenderer.on("open-setting-modal", () => {
    visible.value = true;
  });

  // 和iframe 通信
  window.addEventListener("message", function (event) {
    // 检查消息类型是否为可设置
    if (event.data === "BOTTLE_OPEN_SETTINGS_MODAL") {
      // 执行打开设置模态框的操作
      visible.value = true;
    }
    //定时关闭窗口切换
    if (event.data === "SWITCH_DISABLE") {
      formValues.value.setAlwaysOnTop = true;
    }
  });
});

onMounted(() => {
  formValues.value = (store.settingsModal[props.windowIndex] ?? {}) as any;
  window.ipcRenderer.invoke(
    "set-window-attr",
    unref({ ...formValues.value, index: props.windowIndex })
  );
});
</script>
