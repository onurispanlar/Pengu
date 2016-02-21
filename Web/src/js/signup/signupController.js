angular.module('signup', ["rest"]).controller('signupController', ['$scope', "loginService", function($scope, loginService) {
    
    $scope.signupSubmit = function() {
         loginService.signup($scope.email, $scope.password, $scope.email,
         function signupSuccessCallback(sessionId) {
            window.alert("Signup success:", sessionId);
         },
         function signupFailureCallback(err) {
            window.alert("Signup failure:", err);
         });
    };
    
}]);

