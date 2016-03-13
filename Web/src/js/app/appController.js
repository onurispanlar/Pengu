angular.module('app').controller('appController', ['$scope', function($scope) {

    function removeActiveListSelector() {
        var liElements = $(".listSelectorNames > ul > li"), index;
        for (index = 0; index < liElements.length; index++) {
            $(liElements[index]).removeClass('active');
        }
    }

    $('ul.nav.nav-pills > li').click(function(e) {
        removeActiveListSelector();
        $(this).addClass('active');
    });


}]);
