angular.module('author', []).controller('authorController', ['$scope', function($scope) {
  $scope.authorList = [{
    name: "onur ispanlar",
    likeCount: 89857,
    viewCount: 754,
    chapterCount: 3
  }, {
    name: "ugurcan sengit",
    likeCount: 2547,
    viewCount: 8569,
    chapterCount: 9
  }];
}]);
