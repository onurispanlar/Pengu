angular.module('login', ["rest"]).controller('loginController', ['$scope', "loginService", function($scope, loginService) {
    
    $scope.loginSubmit = function() {
         loginService.login($scope.email, $scope.password, 
         function loginSuccessCallback(sessionId) {
            window.alert("LoginSuccess:", sessionId);
         },
         function loginFailureCallback(err) {
            window.alert("LoginFailure:", err);
         });
    };

}]);

