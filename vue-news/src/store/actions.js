import {
  fetchNewsList,
  fetchJobList,
  fetchAskList,
  fetchUserInfo,
  fetchCommnetItem,
  fetchList,
} from "../api/index.js";

export default {
  // FETCH_NEWS(context) {
  //   fetchNewsList()
  //     .then((response) => {
  //       console.log(response);
  //       context.commit("SET_NEWS", response.data);
  //       return response;
  //     })
  //     .c atch((error) => {
  //       console.log(error);
  //     });
  // },
  // FETCH_JOBS({ commit }) {
  //   fetchJobList()
  //     .then(({ data }) => {
  //       commit("SET_JOBS", data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  // FETCH_ASKS({ commit }) {
  //   fetchAskList()
  //     .then(({ data }) => {
  //       commit("SET_ASKS", data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, id) {
    return fetchCommnetItem(id)
      .then(({ data }) => {
        commit("SET_ITEM", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then((response) => {
        commit("SET_LIST", response.data);
        return response;
      })
      .catch((error) => console.log(error));
  },
};
