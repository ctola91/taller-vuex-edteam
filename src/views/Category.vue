<template>
  <h1>Categorias</h1>
  <p v-show="error">{{ message }}</p>
  <p>{{ textReverse }}</p>
  <CategoryForm />
</template>
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import CategoryForm from "../components/category/CategoryForm.vue";

export default {
  components: {
    CategoryForm,
  },
  setup() {
    const text = ref("");
    const store = useStore();

    return {
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