import { createStore, createLogger } from "vuex";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  state() {
    return {
      categories: [],
      error: false,
      message: "",
    };
  },
  actions: {
    setMessage: ({ commit }, message) => {
      // agregar una funcion asyncrona
      commit('setMessage', message);
    }
  },
  mutations: {
    setMessage: (state, message) => {
      state.message = message;
    },
  },
  plugins: debug ? [createLogger()] : [],
});
