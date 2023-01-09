
export default class AuthService{
   constructor() {}

   setApiKey(apiKey){
        localStorage.setItem("api_Key", apiKey);
    }

   getApiKey(){
        return localStorage.getItem("api_Key");
    }

    setUserRole(userRole){
        localStorage.setItem("user_role", userRole);
    }

    getUserRole(){
        return localStorage.getItem("user_role");
    }

    setUserPermission(userPermission){
        localStorage.setItem("user_permission", userPermission);
    }

    getUserPermission(){
        return localStorage.getItem("user_permission");
    }

    isAuthenticated(){
        if(localStorage.getApiKey != null){
            return true;
        }
        return false;
    }

    logOut(){
        localStorage.removeItem("api_Key");
        localStorage.removeItem("user_role");
        localStorage.removeItem("user_permission");
    }
}
