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

  function removeActiveListSelector() {
      var liElements = $(".authorRightMenu > ul > li"),
          index;
      for (index = 0; index < liElements.length; index++) {
          $(liElements[index]).removeClass('active');
      }
  }

  $('.authorRightMenu > ul > li').click(function(e) {
      removeActiveListSelector();
      $(this).addClass('active');
  });

}]);
