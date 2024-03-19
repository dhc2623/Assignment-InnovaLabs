<template>
  <a-form-item :label="label" :required="required" :rules="rules">
    <a-date-picker
      :value="value"
      :placeholder="placeholder"
      :type="type"
      :error="error"
      @change="updateValue"
      style="width: 200px;"
    />
    <p v-if="type === error.type" class="error-message">{{ error.message }}</p>
  </a-form-item>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps(["label", "required", "rules", "placeholder", "value", "type", "error"]);
const emit = defineEmits(["update:value"]);

// help parent to update the value prop accordingly when this function emits
const updateValue = (newValue) => {
  emit("update:value", newValue);
};
</script>

<style scoped>
.error-message {
  color: #ff4d4f;
  margin-top: 4px;
  font-size: 12px;
}
</style>
