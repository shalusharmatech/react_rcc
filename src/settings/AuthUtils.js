export default class AuthService {
  constructor() {}

  setApiKey(apiKey) {
    localStorage.setItem("api_Key", apiKey);
  }

  getApiKey() {
    return localStorage.getItem("api_Key");
  }

  setUserRole(userRole) {
    localStorage.setItem("user_role", userRole);
  }

  getUserRole() {
    if (localStorage.getItem("user_role")) {
      return localStorage.getItem("user_role").split(",");
    }
    return null;
  }

  setUserPermission(userPermission) {
    localStorage.setItem("user_permission", userPermission);
  }

  getUserPermission() {
    if (localStorage.getItem("user_permission")) {
      return localStorage.getItem("user_permission").split(",");
    }
    return null;
  }

  isAuthenticated() {
    if (localStorage.getItem("api_Key") != null) {
      return true;
    }
    return false;
  }

  logOut() {
    localStorage.removeItem("api_Key");
    localStorage.removeItem("user_role");
    localStorage.removeItem("user_permission");
  }
}
