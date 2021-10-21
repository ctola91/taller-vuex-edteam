<template>
  <h1>Categorias</h1>
  <input type="text" v-model="text" />
  <button @click="setMessage">Cambiar</button>
  <p v-show="error">{{ message }}</p>
</template>
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const text = ref("");
    const store = useStore();

    return {
      text,
      message: computed(() => store.state.message),
      error: computed(() => store.state.error),
      setMessage: () => {
        // mutations
        // store.commit("setMessage", text.value);
        store.dispatch("setMessage", text.value);
      },
    };
  },
};
</script>