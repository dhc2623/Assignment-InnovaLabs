<template>
  <a-space direction="vertical">
    <a-input-search
      v-model:value="value"
      placeholder="input search text"
      enter-button
      @search="onSearch"
    />
  </a-space>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
const onSearch = (searchValue) => {
  console.log('use value', searchValue);
};
</script>
