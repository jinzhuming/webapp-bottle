<template>
  <div>
    <div class="pageContainer">
      <IconLoadingWave
        :style="'position:absolute;width:100%;bottom:0;z-index:0'"
      />
      <IconChineseLogo
        :style="'z-index:1001;position:absolute;left:24px;top:16px;width:18%'"
      />
      <IconActionLogo :style="'z-index:1001'" />
      <Progress
        :percent="progressNum"
        :strokeColor="'rgbs(62, 107, 246)'"
        :strokeWidth="3"
        class="progress"
        :type="'circle'"
        :style="logoFinish ? 'display: block' : 'display:none'"
      />
      <div class="date">
        {{ format(new Date(), "yyyy-MM-dd HH:mm:ss") }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Vue, { computed, onUnmounted, ref, watch } from "vue";
import bottles from "@/assets/images/bottles.png";
import { format } from "date-fns";
import { IconChineseLogo, IconLoadingWave, IconActionLogo } from "./Icon";
import { Progress } from "ant-design-vue";

const props = defineProps<{
  loading: boolean;
}>();

const progressNum = ref(0);
const logoFinish = ref(false);
const timer = ref(null);

setTimeout(() => {
  logoFinish.value = true;
  progressNum.value = 1;
}, 200);

let currentNumber = 0;
timer.value = setInterval(() => {
  currentNumber = Math.ceil(currentNumber + 6.8);
  if (currentNumber >= 100) {
    currentNumber = 100; // 确保不会超过100
    clearInterval(timer.value); // 清除定时器
  } else {
    progressNum.value = currentNumber;
  }
  console.log("加载进度", progressNum.value);
}, 4000);

watch(
  () => props.loading,
  () => {
    console.log("是否loading状态", props.loading);
    if (!props.loading) {
      progressNum.value = 100;
      clearInterval(timer.value);
    }
  },
  { immediate: true }
);

onUnmounted(() => {
  console.log("离开loading页面");
  clearInterval(timer.value);
});
</script>

<style lang="less">
.pageContainer {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-size: cover;
  flex-direction: column;
  text-align: center;
  .date {
    z-index: 10001;
    color: #ffffff;
    position: absolute;
    bottom: 16px;
    right: 24px;
    font-size: 18px;
  }
  .progress.ant-progress {
    position: absolute;
    width: 260px;
    .ant-progress-inner {
      overflow: initial;
      width: 100% !important;
      height: 100% !important;
    }
    .ant-progress-text {
      color: #ffffff;
      bottom: -60px;
      top: unset;
    }
  }
}
</style>
