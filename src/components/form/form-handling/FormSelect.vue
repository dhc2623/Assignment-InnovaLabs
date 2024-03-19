<template>
  <a-form-item :label="label" :required="required" :rules="rules">
    <a-select :value="value" :placeholder="placeholder" @change="updateValue" style="width: 200px;">
      <a-select-option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :type="type"
        :error="error"
        >{{ option.label }}</a-select-option
      >
    </a-select>
    <p v-if="type === error.type" class="error-message">{{ error.message }}</p>
  </a-form-item>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps(["label", "required", "rules", "placeholder", "value", "options", "type", "error"]);

const emit = defineEmits(["update:value"]);

// help parent to update the value prop accordingly when this function emits
const updateValue = (selectedValue) => {
  emit("update:value", selectedValue);
};
</script>

<style scoped>
.error-message {
  color: #ff4d4f;
  margin-top: 4px;
  font-size: 12px;
}
</style>
