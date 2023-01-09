import AuthService from '../settings/AuthUtils'
import { useNavigate } from 'react-router-dom'

export default class LogOut {
    constructor(){
        const auth = new AuthService();
        const navigate = new useNavigate();
        auth.logOut();
        navigate("/");
    }
}

