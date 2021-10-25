import firebaseApp from "./firebase";
import { getFirestore, addDoc, collection } from "firebase/firestore";

// inicializamos firestore
const db = getFirestore(firebaseApp);

const addCategory = async ({ title, description, gasto }) => {
  try {
    const docRef = await addDoc(collection(db, "categories"), {
      title,
      description,
      gasto,
    });
    return docRef.id;
  } catch (err) {
    console.log(err);
  }
};

const getCategories = () => {};
const getCategory = () => {};

export default {
  addCategory,
  getCategories,
  getCategory,
};
