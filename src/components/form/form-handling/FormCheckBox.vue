<template>
  <a-form-item :label="label">
    <a-switch v-model:checked="isChecked" @change="handleChange" />
  </a-form-item>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps(["label", "initialChecked"]);
const emit = defineEmits(["update:checked"]);

// Define a local ref for the checked value
const isChecked = ref(props.initialChecked);

// Handle the change event of the switch
const handleChange = (isChecked) => {
  emit("update:checked", isChecked);
};
</script>
