import { createStore } from "vuex";

export default createStore({
  state: {
    breadcrumbs: [],
  },
  mutations: {
    SET_BREADCRUMBS(state, { breadcrumbs }) {
      state.breadcrumbs = breadcrumbs;
    },
  },
  actions: {},
  modules: {},
});
