import axios from "axios";

class UserParcels {
  constructor() {
    this.BASE_URL = `http://localhost:4000/profile/parcels`;
    //${localStorage.getItem("token")}
    this.config = {
      headers: {
        "mode":"cors",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };
  }

  async GetAllUserParcels() {


    try {
      let response = await axios.get(this.BASE_URL, this.config) ;
      return response;
    } catch (error) {
    
      let message = "An error occured";
      return { data: null, error:message };
    }
  }
}

export default new UserParcels();
