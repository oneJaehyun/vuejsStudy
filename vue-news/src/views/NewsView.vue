<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListMixin from "../mixins/ListMixins.js";
import ListItem from "../components/ListItem";
export default {
  components: {
    ListItem
  },
  mixins: [ListMixin]
};
</script>

<style>
</style>