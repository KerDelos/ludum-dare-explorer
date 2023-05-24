<template>
  <h1>This is a settings page</h1>
  <p>Dark mode</p>
  <n-switch v-model:value="settings.darkMode" />
</template>

<script setup lang="ts">
import { NSwitch } from "naive-ui";

import { useSettingsStore } from "@/stores/settings";

const settings = useSettingsStore();
</script>
