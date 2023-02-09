import axios from "axios";

class Admin {
  constructor() {
    this.BASE_URL = `http://localhost:4000`;

    this.config = {
      headers: {
        mode: "cors",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };
  }
  async GetParcels(payload) {
    try {
      const response = await axios.get(this.BASE_URL, this.config);
      return response
    } catch (error) {
      let message =
        error.response.data.message || "An error occured try again later";
      return { data: null, error: message };
    }
  }
}

export default new Admin
