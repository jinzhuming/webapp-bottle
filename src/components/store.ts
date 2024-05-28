import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useSettingsModalStore = defineStore(
  "settingsModalStore",
  () => {
    const settingsModal = ref(
     [{
      setAlwaysOnTop: true,
      setMovable: false,
      setFullScreen: true,
      setResizable: true,
    },{
      setAlwaysOnTop: true,
      setMovable: false,
      setFullScreen: true,
      setResizable: true,
    }]);
    return { settingsModal };
  },
  // { persist: true }
);
export const useUrlModalStore = defineStore(
  "urlModalStore",
  () => {
    const url = ref("");
    const subUrl = ref("");
    return { url, subUrl };
  },
  { persist: true }
);

