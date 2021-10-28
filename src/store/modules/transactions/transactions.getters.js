const transactions = (state) => state.all;
const ingresosList = (state) => {
  let result = [];
  state.all.forEach((t) => {
    if (!t.gasto) {
      result.push(t);
    }
    return result;
  });
};
const transaction = (state) => state.transaction;

export default {
  transactions,
  transaction,
  ingresosList,
};
