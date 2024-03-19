<template>
  <div>
    <h2>Parent Component</h2>
    <p><strong>Parent Message:</strong> {{ parentMessage }}</p>
    <ChildComponent :message="parentMessage" />
    <router-link to="/">
      <a-button style="width: 200px;">Go to Tasks</a-button>
    </router-link>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import ChildComponent from "../parent-child/ChildComponent.vue";

export default defineComponent({
  name: "ParentComponent",
  components: {
    ChildComponent,
  },
  setup() {
    const parentMessage = ref("Hello from parent");

    return {
      parentMessage
    };
  },
});
</script>
