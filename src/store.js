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
  mutations: {},
  plugins: debug ? [createLogger()] : [],
});
