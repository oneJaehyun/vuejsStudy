<template>
  <div id="app">
    <!-- kebob 으로 컴포넌트를 설정한다  클릭시 컴포넌트로 들어갈수 있다 -->
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
export default {
  components: {
    ToolBar
  }
};
</script>

<style></style>
