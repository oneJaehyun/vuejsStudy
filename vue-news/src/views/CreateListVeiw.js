import ListView from "./ListView.vue";
import bus from "../utils/bus.js";

export default function createListView(name) {
  return {
    name: name,

    created() {
      bus.$emit("start:spinner");
      setTimeout(() => {
        this.$store
          .dispatch("FETCH_LIST", this.$route.name)
          .then(() => {
            bus.$emit("end:spinner");
          })
          .catch((error) => {
            console.log(error);
          });
      }, 3000);
    },
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    render(createElement) {
      console.log(createElement);
      return createElement(ListView);
    },
  };
}
