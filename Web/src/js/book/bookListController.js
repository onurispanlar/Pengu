angular.module('book').controller('bookListController', ['$scope', function($scope) {
    $scope.bookList = [{
        id: 586,
        title: "TURKULER",
        author: "Turkulerimiz",
        likeCount: 325,
        viewCount: 982348,
        chapterCount: 1
    }, {
        id: 347,
        title: "GOD",
        author: "Is An Astronaut",
        likeCount: 385668,
        viewCount: 466,
        chapterCount: 52
    }, {
        id: 634,
        title: "EHEHEHEHE",
        author: "Mehehehehe",
        likeCount: 3456347,
        viewCount: 5333,
        chapterCount: 4
    }];

    function removeActiveListSelector() {
        var liElements = $(".bookListRightMenu > ul > li"),
            index;
        for (index = 0; index < liElements.length; index++) {
            $(liElements[index]).removeClass('active');
        }
    }

    $('.bookListRightMenu > ul > li').click(function(e) {
        removeActiveListSelector();
        $(this).addClass('active');
    });

}]);
