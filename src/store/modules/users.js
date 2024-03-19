import axios from "../../axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export default {
  namespaced: true,
  state: {
    users: [],
    loading: false,
    error: null,
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
    getUsersList({ commit }) {
      commit("SET_LOADING", true);
      axios
        .get("users")
        .then((response) => {
          commit("SET_LOADING", false);
          const users = response.data;
          commit("SET_USERS", users);
        })
        .catch((error) => {
          commit("SET_LOADING", false);
          console.error("Error fetching users:", error);
        });
    },
  },
  getters: {},
};
