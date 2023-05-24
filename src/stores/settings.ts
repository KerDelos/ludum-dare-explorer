import { defineStore } from "pinia";
import { useLocalStorage, usePreferredDark } from "@vueuse/core";

export const useSettingsStore = defineStore("settings", () => {
  const darkMode = useLocalStorage(
    "Settings.darkMode",
    usePreferredDark().value
  );

  return {
    darkMode,
  };
});
