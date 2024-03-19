<template>
  <div>
    <h2>Child Component</h2>
    <a-button style="width: 200px;" @click="sendMessage">Send Message to Parent</a-button>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance } from "vue";

export default defineComponent({
  name: "ChildComponent",
  setup() {
    const instance = getCurrentInstance();
    const { emit } = instance;

    const sendMessage = () => {
      // Emit event to send data back to parent
      emit("childEvent", "Hello from child");
    };

    return {
      sendMessage,
    };
  },
});
</script>
