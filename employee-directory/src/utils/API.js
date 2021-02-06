import axios from "axios";

const API = {
  getRandomEmployee: function() {
    return axios.get("https://randomuser.me/api/?results=5");
  }
};

export default API
