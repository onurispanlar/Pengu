angular.module('author', []).controller('authorController', ['$scope', function($scope) {
  $scope.author = {
    id: 17,
    name: "onur ispanlar",
    likeCount: 89857,
    viewCount: 754,
    chapterCount: 3
  };

}]);
