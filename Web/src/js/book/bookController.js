angular.module('book', []).controller('bookController', ['$scope', function($scope) {
    $scope.book = {
        id: 124,
        title: "TURKULER",
        author: "Turkulerimiz",
        likeCount: 325,
        viewCount: 982348,
        chapterCount: 43,
        chapters: [{
            name: "ONSOZ"
        },{
            name: "dddd"
        }, {
            name: "agag"
        }]
    };
    $scope.chapters = $scope.book.chapters;
}]);
