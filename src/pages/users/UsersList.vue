<template>
  <div>
    <h1>Users List</h1>
    <h4>
      The total count of users are -
      {{ filteredUsers.length > 0 ? filteredUsers.length : users.length }}
    </h4>

    <a-row>
      <a-col :span="8">
        <FormSelect
          name="category"
          form-label="Search Category"
          placeholder="Select Search/Filter Category"
          :options="searchCategory"
          :handleChange="handleCategoryChange"
        />
      </a-col>
      <a-col :span="8">
        <a-input-search
          v-if="showSerachField"
          v-model:value="usersFilter"
          placeholder="Search..."
          @change="handleFilterChange"
        />
      </a-col>
    </a-row>

    <div v-if="loading">Loading...</div>
    <a-table
      :columns="columns"
      :row-key="(record) => record.id"
      :data-source="
        filteredUsers.length > 0 || usersFilter
          ? filteredUsers
          : users
      "
      :loading="loading"
      :pagination="{ pageSize: 5 }"
    >
      <template #bodyCell="{ column, text }">
        <template
          v-if="column.dataIndex === 'address' && column.key === 'address'"
          >{{ text.suite }}, {{ text.street }}
        </template>
        <template
          v-if="column.dataIndex === 'address' && column.key === 'city'"
          >{{ text.city }}</template
        >
      </template>
    </a-table>

    <div v-if="error">{{ error.message }}</div>
  </div>
</template>

<script>
import { defineComponent, onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import FormSelect from "../../components/form/FormSelectComp.vue";
import { searchCategory } from "../../utils/users/searchCategory";

export default defineComponent({
  name: "UsersList",
  components: {
    FormSelect,
  },
  setup() {
    const store = useStore();
    const users = computed(() => store.state.users.users);
    const loading = computed(() => store.state.users.loading);
    const error = computed(() => store.state.users.error);

    // search inputs for userId, status, and title
    const usersFilter = ref("");
    const filteredUsers = ref([]);
    const showSerachField = ref(0);
    const filterKey = ref("");
    let usersFilterMatch = ref(true);

    const handleFilterChange = () => {
      filteredUsers.value = users.value.filter((user) => {
        if (filterKey.value === "address" && user[filterKey.value]) {
          usersFilterMatch =
            !usersFilter.value ||
            user[filterKey.value].city
              .toString()
              .toLowerCase()
              .includes(usersFilter.value.toLowerCase());
        } else if (user[filterKey.value]) {
          usersFilterMatch =
            !usersFilter.value ||
            user[filterKey.value]
              .toString()
              .toLowerCase()
              .includes(usersFilter.value.toLowerCase());
        }
        return usersFilterMatch;
      });
    };

    const handleCategoryChange = (category) => {
      usersFilter.value = "";
      if (category) {
        filterKey.value = category;
        showSerachField.value = 1;
      } else {
        showSerachField.value = 0;
      }
    };
    
    const columns = [
      {
        title: "User ID",
        dataIndex: "id",
        key: "id",
        align: "center",
      },
      {
        title: "User Name",
        dataIndex: "username",
        key: "username",
        align: "center",
      },
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
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
        align: "center",
      },
      {
        title: "Website",
        dataIndex: "website",
        key: "website",
        align: "center",
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
        align: "center",
      },
      {
        title: "City",
        dataIndex: "address",
        key: "city",
        align: "center",
      },
    ];

    onMounted(() => {
      getUsersDataList();
    });

    const getUsersDataList = () => {
      store.dispatch("users/getUsersList");
    };

    return {
      usersFilterMatch,
      usersFilter,
      filterKey,
      filteredUsers,
      showSerachField,
      users,
      loading,
      error,
      columns,
      handleFilterChange,
      searchCategory,
      handleCategoryChange,
    };
  },
});
</script>
