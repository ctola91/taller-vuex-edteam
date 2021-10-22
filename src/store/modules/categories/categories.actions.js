const setMessage = ({ commit }, message) => {
  // agregar una funcion asincrona
  commit("setMessage", message);
};

export default {
  setMessage,
};
