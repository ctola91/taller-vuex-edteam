import mutations from "./transactions.mutations";

const state = () => {
  return {
    all: [],
    transaction: null,
    loading: false,
    error: false,
    message: "",
  };
};

export default {
  namespaced: true,
  state,
  mutations,
};
