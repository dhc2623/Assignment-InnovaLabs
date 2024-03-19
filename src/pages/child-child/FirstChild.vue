<template>
  <div>
    <h2>Child Component 1</h2>
    <a-button style="width: 200px;" @click="sendMessageToSibling">Send Message to Child 2</a-button>
  </div>
</template>

<script setup>
import { eventBus } from './eventBus.js';

const sendMessageToSibling = () => {
  eventBus.emit('messageToSibling', 'Hello from Child 1!');
};
</script>
