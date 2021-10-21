const state = () => {
  return {
    categories: [],
    error: true,
    message: "",
  };
};
const getters = {
  message: (state) => state.message,
  textReverse: (state) => state.message.split("").reverse().join(""),
  error: (state) => state.error,
};
const actions = {
  setMessage: ({ commit }, message) => {
    // agregar una funcion asyncrona
    commit("setMessage", message);
  },
};

const mutations = {
  setMessage: (state, message) => {
    state.message = message;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
