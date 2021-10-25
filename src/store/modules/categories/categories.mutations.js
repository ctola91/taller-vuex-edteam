const setMessage = (state, message) => {
  state.message = message;
};

const CREATE_CATEGORY_REQUEST = (state) => {
  state.loading = true;
  state.error = false;
  state.message = "";
};

const CREATE_CATEGORY_ERROR = (state, err) => {
  state.loading = false;
  state.error = true;
  state.message = err;
  state.category = null;
};

const CREATE_CATEGORY_SUCCESS = (state, category) => {
  state.loading = false;
  state.error = false;
  state.message = "";
  state.category = category;
};

export default {
  setMessage,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_ERROR,
  CREATE_CATEGORY_SUCCESS,
};
