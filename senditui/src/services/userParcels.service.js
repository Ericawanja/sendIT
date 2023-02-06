import axios from "axios";

class UserParcels {
  constructor() {
    this.BASE_URL = `http://localhost:4000/profile`;

    this.config = {
      headers: {
        mode: "cors",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };
  }

  async GetAllUserParcels(payload) {
    let url;
    if (payload === "received") {
      url = `${this.BASE_URL}/parcels/received`;
    } else if (payload === "sent") {
      url = `${this.BASE_URL}/parcels/sent`;
    } else {
      url = `${this.BASE_URL}/parcels`;
    }

    try {
      let response = await axios.get(url, this.config);
      return response;
    } catch (error) {
      console.log(error);
      let message = "An error occured";
      return { data: null, error: message };
    }
  }

 
}

export default new UserParcels();
