<template>
  <h1>Categorias</h1>

  <p v-show="error">{{ message }}</p>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    return {
      message: computed(() => store.state.message),
      error: computed(() => store.state.error),
    };
  },
};
</script>