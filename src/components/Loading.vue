<template>
    <div>
         <div class='pageContainer'>
           <IconLoadingWave
             :style="'position:absolute;width:100%;bottom:0;z-index:0'"
           />
           <IconChineseLogo :style="'z-index:1001;position:absolute;left:24px;top:16px;width:18%'" />
           <IconActionLogo :style="'z-index:1001'" />
           <Progress
             :percent="progressNum"
             :strokeColor="'rgbs(62, 107, 246)'"
             :strokeWidth="3"
             class='progress'
             :type="'circle'"
             :style="logoFinish ? 'display: block' : 'display:none'"
           />
           <div  class='date'>
             {{format(new Date(),'yyyy-MM-dd HH:mm:ss')}}
           </div>
         </div>
       </div>
 </template>
 
 <script lang="ts" setup>
import Vue, { ref } from 'vue'
import bottles from "@/assets/images/bottles.png";
import { format } from 'date-fns'
import { IconChineseLogo, IconLoadingWave, IconActionLogo } from './Icon'
 import {Progress} from 'ant-design-vue'
 
 const progressNum = ref(0);
    const logoFinish = ref(0);
    let currentNumber = 0;
const timer = ref();
const props = defineProps<{
    loading: boolean;
}>();

    if (!props.loading) {
      progressNum.value = 1000;
      clearInterval(timer.value);
    }

    setTimeout(() => {
      logoFinish.value = 2;
      progressNum.value = Math.floor(Math.random() * 10);
      timer.value = setInterval(() => {
        currentNumber += Math.floor(Math.random() * 10) + 1;
        if (
          currentNumber >= 100 ||
          progressNum.value === 100 ||
          progressNum.value >= currentNumber
        ) {
          return;
        } else {
          progressNum.value = currentNumber;
        }
      }, Math.floor(Math.random() * 24000));
    }, 2000);



 </script>

 
 <style lang="less">
.pageContainer {
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    background-size:cover;
    flex-direction:column;
    text-align:center;
    .date {
      z-index: 10001;
      color:#ffffff;
      position:absolute;
      bottom:16px;
      right:24px;
      font-size:18px;
    };
   .progress.ant-progress {
      position:absolute;
      width:32%;
     .ant-progress-inner {
        overflow:initial;
        width:100% !important;
        height:100% !important;
      };
       .ant-progress-text {
          color:#ffffff;
          bottom:-60px;
          top:unset;
        };
    };
  }
 </style>

 