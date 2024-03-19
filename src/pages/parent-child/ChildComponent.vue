<template>
  <div>
    <h2>Child Component</h2>
    <p><strong>Message from Parent:</strong> {{ message }}</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChildComponent",
  props: {
    message: String,
  },
});
</script>
