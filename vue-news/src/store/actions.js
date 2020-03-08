import {
  fetchNewsList,
  fetchJobList,
  fetchAskList,
  fetchUserInfo,
  fetchCommnetItem
} from "../api/index.js";

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => {
        commit("SET_NEWS", data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_JOBS({ commit }) {
    fetchJobList()
      .then(({ data }) => {
        commit("SET_JOBS", data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ASKS({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit("SET_ASKS", data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit("SET_USER", data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommnetItem(id)
      .then(({ data }) => {
        commit("SET_ITEM", data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
