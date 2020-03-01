<template>
  <div>item</div>
</template>

<script>
export default {
  computed: {
    itemInfo() {
      return this.$store.state.item;
    }
  },
  created() {
    const item = this.$params.id;
    this.$store.dispatch("FETCH_ITEM", item);
  }
};
</script>

<style>
</style>