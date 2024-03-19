<template>
  <div>
    <FormHandlingComp />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import FormHandlingComp from "../../components/form/form-handling/FormHandlingComp.vue";

export default defineComponent({
  name: "UsersList",
  components: {
    FormHandlingComp,
  },
});
</script>
