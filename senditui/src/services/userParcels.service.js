import axios from "axios";

class UserParcels {
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

  async GetAllUserParcels(payload) {
    let url;
    if (payload === "received") {
      url = `${this.BASE_URL}/profile/parcels/received`;
    } else if (payload === "sent") {
      url = `${this.BASE_URL}/profile/parcels/sent`;
    } else {
      url = `${this.BASE_URL}/profile/parcels`;
    }

    try {
      let response = await axios.get(url, this.config);
      return response;
    } catch (error) {
     
      let message = "An error occured";
      return { data: null, error: message };
    }
  }
  async GetSingleUserParcel(payload) {
    let url = `${this.BASE_URL}/${payload}`;

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
