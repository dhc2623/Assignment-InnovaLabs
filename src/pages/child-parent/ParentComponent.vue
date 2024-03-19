<template>
  <div>
    <ChildComponent @childEvent="handleChildEvent" />
    <h2>Parent Component</h2>
    <p><strong>Received from Child:</strong> {{ childMessage }}</p>
    <router-link to="/">
      <a-button style="width: 200px;">Go to Tasks</a-button>
    </router-link>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

export default defineComponent({
  name: "ParentComponent",
  components: {
    ChildComponent,
  },
  setup() {
    const childMessage = ref("");
    // Define the event handler to update childMessage
    const handleChildEvent = (message) => {
      // Update parent message based on data received from child
      childMessage.value = message;
    };

    return {
      childMessage,
      handleChildEvent,
    };
  },
});
</script>
