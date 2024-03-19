export default {
  namespaced: true,
  state: {
    usersDetails: [],
  },
  mutations: {
    SET_USERS_DETAILS(state, details) {
      state.usersDetails = details;
    },
  },
  actions: {
    getUsersDetails({ commit }, payload) {
      commit("SET_USERS_DETAILS", payload);
    },
  },
  getters: {},
};
