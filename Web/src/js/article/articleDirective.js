angular.module('article')
  .directive('articleContent', function() {
    return {
      templateUrl: 'templates/article/articleContent.html',
      restrict: 'E',
      controller: 'articleController',
      controllerAs: 'artcl'
    };
  });
