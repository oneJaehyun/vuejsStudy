<template>
  <div>
    <div v-for="item in fetchedAsk" :key="item.id">{{item}}</div>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex';
export default {
  data (){
    return{
      
    }
  },
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