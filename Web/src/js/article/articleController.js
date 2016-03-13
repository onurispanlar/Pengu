angular.module('article', []).controller('articleController', ['$scope', function($scope) {
    $scope.article = {
        id: 99,
        title: "BIRINCI OSMAN",
        author: "Osman",
        likeCount: 2,
        viewCount: 0
    };
    this.article = $scope.article;
}]);
