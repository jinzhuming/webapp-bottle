import { defineStore } from "pinia";
import { ref } from "vue";

export const useSettingsModalStore = defineStore(
  "settingsModalStore",
  () => {
    const settingsModal = ref<Record<string, boolean>>({
      setAlwaysOnTop: true,
      setMovable: false,
      setFullScreen: true,
      setResizable: true,
    });
    return { settingsModal };
  },
  { persist: true }
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
