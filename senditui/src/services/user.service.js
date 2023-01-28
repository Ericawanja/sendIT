import axios from "axios"

class UserSevice {
    BASE_URL =`http://localhost:5000`

    async RegisterUser (details){
        try {
            let url = `${this.BASE_URL}/register`
            const response = await axios.post(url, details);
            return response
        } catch(error){
            console.log(error);
        }
    }
}

export default new UserSevice