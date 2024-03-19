<template>
  <div>
    <h1 v-if="currentRoute === '/'">Tasks</h1>
    <router-link v-if="currentRoute === '/'" to="/parent-child">
      <a-button type="primary" style="width: 200px;">Parent - Child Communication</a-button>
    </router-link>

    <div class="button-container">
      <router-link v-if="currentRoute === '/'" to="/child-parent">
        <a-button type="primary" style="width: 200px;">Child - Parent Communication</a-button>
      </router-link>
    </div>

    <div class="button-container">
      <router-link v-if="currentRoute === '/'" to="/child-child">
        <a-button type="primary" style="width: 200px;">Child - Child Communication</a-button>
      </router-link>
    </div>

    <div class="button-container">
      <router-link v-if="currentRoute === '/'" to="/users">
        <a-button type="primary" style="width: 200px;">Users</a-button>
      </router-link>
    </div>

    <div class="button-container">
      <router-link v-if="currentRoute === '/'" to="/form-handling">
        <a-button type="primary" style="width: 200px;">Form Handling</a-button>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "IndexPage",
  setup() {
    const route = useRoute();
    const currentRoute = computed(() => route.path);

    return {
      currentRoute,
    };
  },
};
</script>

<style scoped>
.button-container {
  margin-top: 10px;
}
</style>
