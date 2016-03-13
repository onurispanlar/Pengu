angular.module('author', []).controller('authorController', ['$scope', function($scope) {
  $scope.author = {
    id: 17,
    name: "onur ispanlar",
    likeCount: 89857,
    viewCount: 754,
    chapterCount: 3
  };
  $scope.authorList = [{
    id: 17,
    name: "onur ispanlar",
    likeCount: 89857,
    viewCount: 754,
    chapterCount: 3
  }, {
    id: 22,
    name: "ugurcan sengit",
    likeCount: 2547,
    viewCount: 8569,
    chapterCount: 9
  }];
}]);
