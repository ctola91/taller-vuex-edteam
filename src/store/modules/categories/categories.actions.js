import CategoryService from "../../../services/CategoryService";

const setMessage = ({ commit }, message) => {
  // agregar una funcion asincrona
  commit("setMessage", message);
};

const addCategory = async ({ commit }, { title, description, gasto }) => {
  try {
    let categoryID = await CategoryService.addCategory({
      title,
      description,
      gasto,
    });
    commit("addCategory", categoryID);
  } catch (err) {
    console.log(err);
  }
};

export default {
  setMessage,
  addCategory,
};
