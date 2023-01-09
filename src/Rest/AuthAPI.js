import axios from "axios";
import { API_URL } from "../settings/Constants";


export default class AuthAPI {
    constructor() {

    }  
    
    async authenticateUser(username, password) {

        const response = await axios.post(API_URL + "/auth/login", {
            username: username,
            password: password
        });

        return response;
    }
  }