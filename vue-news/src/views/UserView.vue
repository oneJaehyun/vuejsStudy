<template>
  <div>
    <p>name : {{uesrInfo.id}}</p>
    <p>karma : {{uesrInfo.karma}}</p>
    <p>created : {{uesrInfo.created}}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  computed: {
    uesrInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
  }
};
</script>

<style>
</style>