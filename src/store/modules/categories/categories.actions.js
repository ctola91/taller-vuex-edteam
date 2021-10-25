import CategoryService from "../../../services/CategoryService";
import {
  CREATE_CATEGORY_ERROR,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
} from "./categories.types";

const setMessage = ({ commit }, message) => {
  // agregar una funcion asincrona
  commit("setMessage", message);
};

const addCategory = async ({ commit }, { title, description, gasto }) => {
  try {
    commit(CREATE_CATEGORY_REQUEST);
    let categoryID = await CategoryService.addCategory({
      title,
      description,
      gasto,
    });
    commit(CREATE_CATEGORY_SUCCESS, categoryID);
  } catch (err) {
    console.log(err);
    commit(CREATE_CATEGORY_ERROR, err);
  }
};

export default {
  setMessage,
  addCategory,
};
