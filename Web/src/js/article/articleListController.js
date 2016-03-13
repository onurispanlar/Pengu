angular.module('article').controller('articleListController', ['$scope', function($scope) {
    $scope.articleList = [{
        id: 99,
        title: "BIRINCI OSMAN",
        author: "Osman",
        likeCount: 2,
        viewCount: 0
    }, {
        id: 949,
        title: "EN BUYK OSMAN",
        author: "Kucuk Osman",
        likeCount: 224124,
        viewCount: 8349
    }, {
        id: 56858,
        title: "NABER ;)",
        author: "Buyuk Osman",
        likeCount: 325,
        viewCount: 76,
        type: "Documentation"
    }, {
        id: 57,
        title: "Ben kocaman isimli bir chapter'ım, Ben kocaman isimli bir chapter'ım, Ben kocaman isimli bir chapter'ım, Ben kocaman isimli bir chapter'ım, Ben kocaman isimli bir chapter'ım",
        author: "Jean Paul Osman",
        likeCount: 325,
        viewCount: 76,
        percent: 15,
        type: "Chapter"
    }];

    function removeActiveListSelector() {
        var liElements = $(".articleRightMenu > ul > li"),
            index;
        for (index = 0; index < liElements.length; index++) {
            $(liElements[index]).removeClass('active');
        }
    }

    $('.articleRightMenu > ul > li').click(function(e) {
        removeActiveListSelector();
        $(this).addClass('active');
    });

}]);
