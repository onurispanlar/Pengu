/* global angular */

var loginService = function(httpClientService) {
    function signup(username, password, email, successCallback, failureCallbacks) {
        var url = "addUser",
            data = {
                username: username,
                email: email,
                password: password
            };
        
        httpClientService.post(url, data, successCallback, failureCallbacks);
    }
    
    function logout(username, successCallback, failureCallbacks) {
        var url = "logout",
            data = {
                username: username
            };
        
        httpClientService.put(url, data, successCallback, failureCallbacks);
    }
    
    function login(username, password, successCallback, failureCallbacks) {
        var url = "login",
            data = {
                username: username,
                password: password
            };
        
        httpClientService.put(url, data, successCallback, failureCallbacks);
    }
    
    return {
        signup: signup,
        login: login,
        logout: logout
    }
}

angular.module("login")
    .factory("loginService", ["httpClientService", loginService]);