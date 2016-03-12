angular.module('book', []).controller('bookController', ['$scope', function($scope) {
  $scope.bookList = [{
    title: "TURKULER",
    author: "Turkulerimiz",
    likeCount: 325,
    viewCount: 982348,
    chapterCount: 1
  }, {
    title: "GOD",
    author: "Is An Astronaut",
    likeCount: 385668,
    viewCount: 466,
    chapterCount: 52
  }, {
    title: "EHEHEHEHE",
    author: "Mehehehehe",
    likeCount: 3456347,
    viewCount: 5333,
    chapterCount: 4
  }];
}]);
