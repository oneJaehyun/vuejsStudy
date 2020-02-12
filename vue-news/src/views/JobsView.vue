<template>
  <div>
    <div v-for="item in this.$store.state.jobs" :key="item.id">{{item}}</div>

  </div>
</template>

<script>

export default {
  data(){
    return {
      jobs : this.$store.state.jobs
    }
  },
  created(){
    this.$store.dispatch('FETCH_JOBS');
  }

};
</script>

<style>
</style>