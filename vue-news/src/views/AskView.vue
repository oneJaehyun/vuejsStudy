<template>
  <div>ASK</div>
</template>

<script>
import {fetchAskList} from '../api/index.js'
export default {
  data (){
    return {
      ask : []
    }
  },
  created(){
    fetchAskList().then(response=>
      this.ask = response)
      .catch(error=>
      // eslint-disable-next-line no-console
      console.log(error))
  }
};
</script>

<style>
</style>