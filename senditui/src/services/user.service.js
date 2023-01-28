import axios from "axios";

class UserSevice {
  BASE_URL = `http://localhost:5000`;

  async RegisterUser(details) {
    try {
      let url = `${this.BASE_URL}/register`;
      const response = await axios.post(url, details);
      console.log(response);
      return response;
      
    } catch (error) {
        console.log(error);
      let message = error?.response?.data?.message || "An error occured. Please try again later";
      return { data: null, error: message };
    }
  }
}

export default new UserSevice();
