var app = angular.module('app', ['ngRoute', "login"]);

app.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider
        .when('/', {
            templateUrl: 'templates/app/app.html',
            controller: 'appController'
        })
        .when('/login', {
            templateUrl: 'templates/login/login.html',
            controller: 'loginController'
        })
        .when('/signup', {
            templateUrl: 'templates/signup/signup.html',
            controller: 'signupController'
        })
        .when('/user', {
            templateUrl: 'templates/user/user.html',
            controller: 'userController'
        })
        .when('/article', {
            templateUrl: 'templates/book/articlePreview.html',
            controller: 'bookController'
        })
        .when('/articleEdit', {
            templateUrl: 'templates/book/articleEdit.html',
            controller: 'bookController'
        })
        .when('/articleAdd', {
            templateUrl: 'templates/book/articleAdd.html',
            controller: 'bookController'
        })
        .when('/book', {
            templateUrl: 'templates/book/bookPreview.html',
            controller: 'bookController'
        })
        .when('/bookEdit', {
            templateUrl: 'templates/book/bookEdit.html',
            controller: 'bookController'
        })
        .when('/bookAdd', {
            templateUrl: 'templates/book/bookAdd.html',
            controller: 'bookController'
        });
}]);
