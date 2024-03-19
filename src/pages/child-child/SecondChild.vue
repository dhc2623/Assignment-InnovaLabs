<template>
  <div>
    <h2>Child Component 2</h2>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { eventBus } from "./eventBus.js";
import { ref, onMounted } from "vue";

const message = ref("");

onMounted(() => {
  eventBus.on("messageToSibling", (msg) => {
    message.value = msg;
  });
});
</script>
