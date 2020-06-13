<template>
  <div>
    <user-profile :info="userInfo">
      <div slot="username">{{userInfo.id}}</div>
      <span slot="time">{{"joined " +userInfo.created +"," }}</span>
      <span slot="karma">{{userInfo.karma}}</span>
    </user-profile>
  </div>
</template>

<script>
import axios from "axios";
import UserProfile from "../components/UserProfile.vue";
import bus from "../utils/bus.js";

export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },

  created() {
    const userName = this.$route.params.id;
    bus.$emit("start:spinner");
    this.$store
      .dispatch("FETCH_USER", userName)
      .then(() => {
        bus.$emit("end:spinner");
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
</style>