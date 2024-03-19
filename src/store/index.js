import { createStore } from "vuex";

import users from "./modules/users";
import formHandling from "./modules/formHandling";

const store = createStore({
  modules: {
    users,
    formHandling,
  },

  state: {},
  mutations: {},
  actions: {},
});

export default store;
