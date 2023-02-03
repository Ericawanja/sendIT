import axios from "axios";

class UserParcels {
  constructor() {
    this.BASE_URL = `http://localhost:4000/profile/parcels`;

    
    this.config = {
      headers: {
        Authorization: `Bearer ${
          localStorage.getItem("token")
        }`,
      },
    };
  }

  async GetAllUserParcels() {
    let url = this.BASE_URL;
    console.log(localStorage.getItem('token'));
    try {
      let parcels = await axios.get(url, this.config);
      return parcels;
    } catch (error) {
      console.log(error);
      let message = "An error occured";
      return { data: null, message };
    }
  }
}

export default new UserParcels();
