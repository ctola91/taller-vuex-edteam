const message = (state) => state.message;
const textReverse = (state) => state.message.split("").reverse().join("");
const error = (state) => state.error;

export default {
  message,
  textReverse,
  error,
};
