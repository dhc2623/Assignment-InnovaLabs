<template>
  <a-row :gutter="16">
    <a-col
      v-if="formLabel || formNote"
      :span="formLayout == 'horizontal' ? 12 : 24"
    >
      <div>
        <label
          v-if="formLabel"
          :class="
            isRequired == true
              ? 'form-label ant-form-item-required'
              : 'form-label'
          "
          >{{ formLabel }}</label
        >
        <span v-if="formNote" class="form-note">{{ formNote }}</span>
      </div>
    </a-col>
    <a-col
      :span="
        formLayout == 'horizontal' ? (formLabel || formNote ? 12 : 24) : 24
      "
    >
      <div>
        <a-form-item>
          <a-select
            :filter-option="filterOption"
            @change="handleChange"
            allowClear
            :placeholder="placeholder"
            style="border: 1px solid #000000; border-radius: 7px; color: #000000"
          >
            <a-select-option
              v-for="option in options"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </div>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: "FormSelectComp",
  props: {
    name: {
      type: String,
      required: true,
    },
    handleChange: {
      type: Function,
      required: false,
      default: () => {},
    },
    placeholder: {
      type: String,
      required: false,
    },
    options: {
      type: Array,
      required: false,
      default: () => [],
    },
    formLabel: {
      type: String,
      required: false,
      default: "",
    },
    formNote: {
      type: String,
      required: false,
      default: "",
    },
    formLayout: {
      type: String,
      required: false,
      default: "horizontal",
    },
  },
  methods: {
    filterOption(input, option) {
      return option.componentOptions.children[0].text
        .toLowerCase()
        .includes(input.toLowerCase());
    },
  },
};
</script>
