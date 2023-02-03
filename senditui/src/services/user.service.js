import axios from "axios";

class UserSevice {
  BASE_URL = `http://localhost:5000`;

  async RegisterUser(details) {
    try {
      let url = `${this.BASE_URL}/register`;
      const response = await axios.post(url, details);

      return response;
    } catch (error) {
      let message = "An error occured. Please try again later";
      // error?.response?.data?.message ||

      return { data: null, error: message };
    }
  }

  async LoginUser(details) {
    try {
      let url = `${this.BASE_URL}/login`;
      const response = await axios.post(url, details);
      
      return response;
    } catch (error) {
      let message =
        error.response.data.message ||
        "An error occured. Please try again later";
      return { data: null, error: message };
    }
  }
}

export default new UserSevice();
