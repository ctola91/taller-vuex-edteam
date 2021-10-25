const setMessage = (state, message) => {
  state.message = message;
};

const addCategory = (state, category) => {
  state.category = category;
};

export default {
  setMessage,
  addCategory,
};
