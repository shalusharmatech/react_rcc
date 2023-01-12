import AuthService from './AuthUtils';

describe.only('Testing AuthUtils Settings', () => {

    beforeEach(() => {
        console.log("Before Each TEST I run.");
    })

    afterEach(() => {
        console.log("After Each TEST I run.");
    });

    it('should set and get auth API Key.', () => {
        const authService = new AuthService();
        const dummyApiKey = "dummy_api_key";
        authService.setApiKey(dummyApiKey);
        expect(authService.getApiKey()).toBe(dummyApiKey);
    });

    it('should test isAuthenticated() method.', () => {
        const authService = new AuthService();
        expect(authService.isAuthenticated()).toBe(false);

        const dummyApiKey = "dummy_api_key";
        authService.setApiKey(dummyApiKey);
        expect(authService.isAuthenticated()).toBe(true);
    });

    /**
        @todo: Write test for Permissions.
    **/
    it('should set and get permissions.', () => {
        expect(true).toBe(true);
    });

    /**
        @todo: Write test for Role.
    **/
    it('should set and get permissions.', () => {
        expect(true).toBe(true);
    });

    /**
       @todo: Write test for Role.
    **/
    it('should test logout() method.', () => {
        expect(true).toBe(true);
    });

});