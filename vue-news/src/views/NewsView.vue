<template>
  <div>NEWS</div>
</template>

<script>

import {fetchNewsList }from '../api/index.js'
export default {
  data(){
    return{
      news : []
    }
  },
   created() {
      
      fetchNewsList()
      .then(response=>{
        this.news = response;
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch(error=>{
        // eslint-disable-next-line no-console
        console.log(error);
        
      })
  },
};
</script>

<style>
</style>