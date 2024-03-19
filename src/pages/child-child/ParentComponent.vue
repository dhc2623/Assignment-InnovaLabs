<template>
  <div>
    <FirstChild />
    <SecondChild />
    <router-link to="/">
      <a-button style="width: 200px;">Go to Tasks</a-button>
    </router-link>
  </div>
</template>

<script setup>
import FirstChild from './FirstChild.vue';
import SecondChild from './SecondChild.vue';
</script>
