angular.module('app')
  .directive('navbar', function() {
    return {
      templateUrl: 'templates/navbar/navbar.html',
      restrict: 'E',
      controller: 'navbarController',
      controllerAs: 'nav'
    };
  });
