<template>
  <div>JOBS</div>
</template>

<script>
import {fetchJobList} from '../api/index.js'
export default {
  data(){
    return {
      jobs : []
    }
  },
  created(){
    fetchJobList().then(response=>this.jobs = response)
    .catch(error=>
      // eslint-disable-next-line no-console
      console.log(error))
  }

};
</script>

<style>
</style>