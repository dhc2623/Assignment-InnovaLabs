<template>
  <div>
    <a-form
      ref="formRef"
      @finish="handleSubmit"
      :model="formData"
      :validateTrigger="validateTrigger"
    >
      <div v-for="(block, index) in blocks" :key="index">
        <template v-if="block.type === 'text' || block.type === 'email'">
          <FormInput
            :label="block.props.title"
            :required="block.props.required"
            :rules="getValidationRules(block)"
            :placeholder="block.props.placeholder"
            :value="formData[block.token]"
            :type="block.type === 'email' ? 'email' : 'text'"
            @update:value="updateFormData(block.token, $event)"
            :error="error"
          />
        </template>
        <template v-else-if="block.type === 'select'">
          <FormSelect
            :label="block.props.title"
            :required="block.props.required"
            :rules="getValidationRules(block)"
            placeholder="Select..."
            :value="formData[block.token]"
            :options="block.props.options"
            @update:value="updateFormData(block.token, $event)"
            :error="error"
            :type="block.type"
          />
        </template>
        <template v-else-if="block.type === 'checkbox'">
          <FormCheckBox
            :label="block.props.title"
            :checked="formData[block.token]"
            @update:value="updateFormData(block.token, $event)"
          />
        </template>
        <template v-else-if="block.type === 'date'">
          <FormDatePicker
            :label="block.props.title"
            :required="isRequired(block.props.required)"
            :rules="getValidationRules(block)"
            :placeholder="block.props.placeholder"
            :value="formData[block.token]"
            @update:value="updateFormData(block.token, $event)"
            :error="error"
            :type="block.type"
          />
        </template>
      </div>
      <a-button type="primary" html-type="submit" style="width: 200px"
        >Submit</a-button
      >
    </a-form>

    <!-- showing the details below -->
    <a-table
      :columns="columns"
      :row-key="(record) => record.id"
      :data-source="usersDetails"
    >
      <template #bodyCell="{ column, text }">
        <template
          v-if="column.dataIndex === 'dob'"
          >{{ formattedDate(text) }}
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { blocks } from "../../../utils/formBlocks.js";
import FormInput from "./FormInput.vue";
import FormSelect from "./FormSelect.vue";
import FormDatePicker from "./FormDatePicker.vue";
import FormCheckBox from "./FormCheckBox.vue";
import { useStore } from "vuex";
import { formattedDate } from "../../../utils/formatDate.js";

const formData = ref({});
const validateTrigger = "onBlur";
const error = ref({ message: "", type: "" });
const formRef = ref(null);
const store = useStore();

const usersDetails = computed(() => store.state.formHandling.usersDetails);

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    align: "center",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    align: "center",
  },
  {
    title: "Car",
    dataIndex: "car",
    key: "car",
    align: "center",
  },
  {
    title: "DOB",
    dataIndex: "dob",
    key: "dob",
    align: "center",
  },
];

const handleSubmit = async () => {
  try {
    await validateForm();
    alert("Form submitted successfully!");

    // Clear any previous error message
    error.value.message = null;

    // Retrieve form data
    const { PERSON_NAME, EMAIL, SELECT_FIELD, PERSON_DOB } = formData.value;

    // Create an entry with form data
    const userEntry = {
      name: PERSON_NAME,
      email: EMAIL,
      car: SELECT_FIELD,
      dob: PERSON_DOB,
    };

    // Call the function to update user details list
    getUsersDetailList(userEntry);
    
  } catch (err) {
    error.value.message = err;
  }
};

const getUsersDetailList = (userEntry) => {
  // Ensure that usersDetails is defined and initialized properly
  if (!usersDetails.value) {
    console.error("usersDetails is not defined or initialized properly");
    return;
  }

  // Add the new user entry to the usersDetails list
  usersDetails.value.push(userEntry);
  // Call the action to update the user details list in the store
  store.dispatch("formHandling/getUsersDetails", usersDetails);
};

const isRequired = (token) => {
  return token && formData.value[token];
};

const updateFormData = (token, value) => {
  formData.value[token] = value;
};

const validateForm = () => {
  return new Promise((resolve, reject) => {
    for (const block of blocks) {
      if (block.props.required && !formData.value[block.token]) {
        error.value.type = block.type;
        reject(new Error(`Please ${block.props.title}`));
        return;
      }
    }
    error.value.message = null;
    resolve();
  });
};

const getValidationRules = (block) => {
  const rules = [];
  if (block.props.required) {
    rules.push({
      required: true,
      message: `Please ${block.props.title}`,
    });
  }

  if (block.token === "EMAIL") {
    rules.push({
      type: "email",
      message: "Please enter a valid email address",
    });
  }
  return rules;
};
</script>
