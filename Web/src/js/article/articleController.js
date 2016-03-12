angular.module('article', []).controller('articleController', ['$scope', function($scope) {
  $scope.articleList = [{
    title: "BIRINCI OSMAN",
    author: "Osman",
    likeCount: 2,
    viewCount: 0
  }, {
    title: "EN BUYK OSMAN",
    author: "Kucuk Osman",
    likeCount: 224124,
    viewCount: 8349
  }, {
    title: "NABER ;)",
    author: "Buyuk Osman",
    likeCount: 325,
    viewCount: 76
  }];
}]);
