import AuthService from "./AuthUtils";

describe("Testing AuthUtils Settings", () => {
  const authService = new AuthService();

  beforeEach(() => {
    console.log("Before Each TEST I run.");
    authService.logOut();
  });

  afterEach(() => {
    console.log("After Each TEST I run.");
  });

  it("should set and get auth API Key.", () => {
    const dummyApiKey = "dummy_api_key";
    authService.setApiKey(dummyApiKey);
    expect(authService.getApiKey()).toBe(dummyApiKey);
  });

  it("should test isAuthenticated() method.", () => {
    expect(authService.isAuthenticated()).toBe(false);

    const dummyApiKey = "dummy_api_key";
    authService.setApiKey(dummyApiKey);
    expect(authService.isAuthenticated()).toBe(true);
  });

  it("should set and get role.", () => {
    const dummyApiRoles = ["role1", "role2"];

    authService.setUserRole(dummyApiRoles);
    //console.log(authService.getUserRole());
    expect(authService.getUserRole().length).toBe(2);
    expect(authService.getUserRole()[0]).toBe("role1");
    expect(authService.getUserRole()[1]).toBe("role2");
  });

  it("should set and get permissions.", () => {
    const dummyApiPermissions = ["admin", "user", "owner"];
    authService.setUserPermission(dummyApiPermissions);
    expect(authService.getUserPermission().length).toBe(3);
    expect(authService.getUserPermission()[0]).toBe("admin");
    expect(authService.getUserPermission()[1]).toBe("user");
    expect(authService.getUserPermission()[2]).toBe("owner");
  });

  it("should test logout() method.", () => {
    const dummyApiKey = "dummy_api_key";
    const dummyApiRole = ["role1"];
    const dummyApiPermission = ["admin"];
    authService.setApiKey(dummyApiKey);
    authService.setUserRole(dummyApiRole);
    authService.setUserPermission(dummyApiPermission);
    authService.logOut();
    expect(authService.getApiKey()).toBeNull();
    expect(authService.getUserRole()).toBe(null);
    expect(authService.getUserPermission()).toBeNull();
  });
});
