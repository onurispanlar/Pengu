var app = angular.module('app', ['ngRoute']);

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
            templateUrl: 'templates/article/article.html',
            controller: 'articleController'
        })
        .when('/book', {
            templateUrl: 'templates/book/book.html',
            controller: 'bookController'
        });
}]);
