import axios from "axios";

// 1.HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};
// 2. API 함수 정리
async function fetchNewsList() {
  try {
    const response = await axios.get(`${config.baseUrl}news/1.json`);
    return response;

  } catch (error) {
    console.log(error)
  }
}

async function fetchAskList() {
  try {
    const response = await axios.get(`${config.baseUrl}ask/1.json`);

    return response;
  } catch (error) {
    console.log(error);

  }


}
async function fetchJobList() {
  try {
    const response = await axios.get(`${config.baseUrl}jobs/1.json`);
    return response;

  } catch (error) {
    console.log(error);
  }

}
async function fetchUserInfo(userName) {
  try {
    const response = await axios.get(`${config.baseUrl}user/${userName}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }

}
async function fetchCommnetItem(id) {
  try {
    const response = await axios.get(`${config.baseUrl}item/${id}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }


}
async function fetchList(pageName) {
  try {
    const response = await axios.get(`${config.baseUrl}${pageName}/1.json`)

    return response;
  } catch (error) {
    console.log(error);
  }

}
export {
  fetchNewsList,
  fetchAskList,
  fetchJobList,
  fetchUserInfo,
  fetchCommnetItem,
  fetchList,
};
