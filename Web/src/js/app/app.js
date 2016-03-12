var app = angular.module('app', ['ngRoute', 'ui.router', 'article', 'book', 'author']);

app.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('app', {
      url: "/",
      controller: 'appController',
      templateUrl: 'templates/app/app.html'
    })
    .state('login', {
      url: "/login",
      controller: 'loginController',
      templateUrl: 'templates/login/login.html'
    })
    .state('signup', {
      url: "/signup",
      controller: "signupController",
      templateUrl: "templates/signup/signup.html"
    })
    .state('app.article', {
      url: "article",
      controller: "articleController",
      templateUrl: "templates/article/article.html"
    })
    .state('app.book', {
      url: "book",
      controller: "bookController",
      templateUrl: "templates/book/book.html"
    })
    .state('app.author', {
      url: "author",
      controller: "authorController",
      templateUrl: "templates/author/author.html"
    });
}]).run(["$state",
  function($state) {
    $state.go('app.article');
  }
]);
