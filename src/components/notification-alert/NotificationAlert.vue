<template>
  <a-space direction="vertical" style="width: 100%">
    <template v-if="type === 'success'">
      <a-alert :message="message" type="success" show-icon />
    </template>
    <template v-else-if="type === 'error'">
      <a-alert :message="message" type="error" show-icon />
    </template>
  </a-space>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["message", "type"]);
</script>
