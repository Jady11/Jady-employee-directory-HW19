import axios from "axios";

const API = {
  getRandomEmployee: function() {
    return axios.get("https://randomuser.me");
  }
};

export default API;
