<template>
  <h1 class="title">Categorias</h1>
  <p v-show="error">{{ message }}</p>
  <div class="block is-flex is-justify-content-start">
    <button class="button is-primary" @click="toggleCreateSection">
      Crear Nuevo
    </button>
  </div>
  <div class="box" v-show="isCreateActive">
    <h2 class="subtitle is-4">Crear nueva categoria</h2>
    <CategoryForm
      :categoryForm="categoryForm"
      :handleSubmit="submit"
      :loading="loading"
    />
  </div>
  <div class="block">
    <h2 class="subtitle is-4">Lista de Categorias</h2>
    <CategoryList :category-list="categories" />
  </div>
</template>
<script>
import { ref, reactive, computed, watch, onMounted } from "vue";
import { useStore } from "vuex";
import CategoryForm from "../components/category/CategoryForm.vue";
import CategoryList from "../components/category/CategoryList.vue";

export default {
  components: {
    CategoryForm,
    CategoryList,
  },
  setup() {
    // valores reactivos
    const text = ref("");
    const store = useStore();
    const categoryForm = reactive({
      title: "",
      description: "",
      gasto: false,
    });
    const isCreateActive = ref(false);

    // metodos del ciclo de vida de un componente
    onMounted(() => {
      fetchCategories();
    });

    // computed properties --- getters
    const loading = computed(() => {
      return store.getters["categories/loading"];
    });

    const category = computed(() => {
      return store.getters["categories/category"];
    });

    const categories = computed(() => {
      return store.getters["categories/categories"];
    });

    // dispatch == disparar el Action
    const createCategory = (category) => {
      store.dispatch("categories/addCategory", category);
    };

    const fetchCategories = () => {
      store.dispatch("categories/fetchCategories");
    };

    // methods == metodos del componente
    const submit = (event) => {
      event.preventDefault();
      if (categoryForm.title !== "" && categoryForm.description !== "") {
        createCategory({
          title: categoryForm.title,
          description: categoryForm.description,
          gasto: categoryForm.gasto ? true : false,
        });
      } else {
        alert("Llene todos los campos del formulario");
      }
    };

    const toggleCreateSection = () => {
      isCreateActive.value = !isCreateActive.value;
    };

    // watch == escuchar cambios en valores especificos
    watch(category, (newValue, oldValue) => {
      if (oldValue !== undefined && oldValue !== newValue) {
        console.log("created: ", newValue);
      }
    });

    return {
      submit,
      toggleCreateSection,
      isCreateActive,
      loading,
      categoryForm,
      categories,
      text,
      message: computed(() => store.getters["categories/message"]),
      error: computed(() => store.getters["categories/error"]),
      setMessage: () => {
        // mutations
        // store.commit("setMessage", text.value);
        store.dispatch("categories/setMessage", text.value);
      },
      textReverse: computed(() => store.getters["categories/textReverse"]),
    };
  },
};
</script>
