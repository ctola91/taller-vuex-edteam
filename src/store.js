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
  actions: {},
  mutations: {
    setMessage: (state, message) => {
      state.message = message;
    },
  },
  plugins: debug ? [createLogger()] : [],
});
