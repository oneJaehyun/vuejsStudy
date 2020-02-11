<template>
<div>
  <div v-for="item in news" :key="item.id">{{item.title}}</div>
</div>
</template>

<script>
export default {
  data(){
    return{
      news : this.$store.state.news
    }
  },
   created() {
      this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style>
</style>