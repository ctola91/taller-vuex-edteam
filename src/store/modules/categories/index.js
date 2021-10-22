import actions from "./categories.actions";
import getters from "./categories.getters";
import mutations from "./categories.mutations";

const state = () => {
  return {
    categories: [],
    error: true,
    message: "",
  };
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
