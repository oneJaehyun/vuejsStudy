<template>
  <div>
     <p v-for="item in fetchedAsk" :key="item.id">
      <a v-bind:href="item.url">{{item.title}}</a>
      <small>{{item.time_ago}} by {{item.user}}</small>
    </p>
  </div>
  
</template>

<script>
import {mapState,mapGetters} from 'vuex';
export default {

  created(){
    this.$store.dispatch('FETCH_ASKS');
  },
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ])
    // #2
  
    //   ...mapState({
    //     fetchedAsk : state =>state.asks
    //   }),

    //# 1 
    // ask(){
    //   return this.$store.state.asks;
    // }
  }  
};
</script>

<style>
</style>