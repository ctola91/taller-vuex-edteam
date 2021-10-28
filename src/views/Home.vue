<template>
  <div class="home">
    <TransactionTable />
  </div>
</template>

<script>
import TransactionTable from "../components/transactions/TransactionTable.vue";
export default {
  name: "Home",
  components: {
    TransactionTable,
  },
};
</script>
