angular.module('author', []).controller('authorController', ['$scope', function($scope) {
  $scope.author = {
    id: 17,
    name: "onur ispanlar",
    likeCount: 89857,
    viewCount: 754,
    chapterCount: 3,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at mattis nibh. Mauris nec massa gravida, maximus eros ut, faucibus orci. Morbi gravida ultricies augue, ac sagittis lectus\n varius a. Nullam interdum, sem in viverra interdum, nisl nisi tempus eros, vulputate convallis ex risus sit amet ligula. Cum sociis\n natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed quis lectus interdum erat consectetur tincidunt eget nec\n\n nulla. Aenean nec quam sed dolor mollis facilisis eget sed arcu. Nam at libero massa. Sed condimentum egestas erat id viverra.\n\n Nulla euismod, erat in pulvinar hendrerit, metus massa commodo eros, consectetur lacinia leo nulla quis massa\n. Cras sodales sodales lorem quis placerat. Ut sollicitudin finibus magna, at\n ullamcorper sem bibendum eu. Maecenas in neque nunc. Sed rhoncus nisl in sapien tempus, eu dictum neque interdum. Duis malesuada leo eu volutpat ornare. Praesent id felis eget lectus molestie fermentum. Praesent congue eget arcu vel lobortis. Cras vulputate egestas nisl sit amet maximus. Nullam elementum ultrices est eget auctor. Maecenas ac laoreet magna. Donec vel ipsum leo. Sed commodo pharetra ipsum, in lobortis urna. Maecenas quis risus sollicitudin, accumsan nulla a, blandit sapien. Praesent nibh odio, viverra eu est eget, ornare facilisis enim. Aliquam at ipsum non velit consectetur dignissim non eget erat. Ut a laoreet ligula, ultricies laoreet ante. Aenean id venenatis libero. Aenean commodo metus mauris, et bibendum lorem laoreet in. Praesent ornare auctor mattis. Proin pretium, elit quis facilisis convallis, tortor odio convallis ipsum, quis rhoncus tellus felis id est. Aliquam in enim imperdiet, aliquet magna quis, porttitor tortor. Vivamus pulvinar in lacus at egestas. Nunc mi turpis, malesuada in tincidunt tempor, cursus at lectus. Mauris non ipsum at ante aliquam tincidunt tempus vel justo. Nulla laoreet a sem eu imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Nulla et tristique sem. Aliquam consequat est nec eros placerat venenatis. Nam nec purus eget nulla facilisis egestas. Mauris ipsum tellus, fringilla vitae consequat sit amet, malesuada fermentum justo. Fusce nec sodales lorem. Proin id tortor massa. Mauris accumsan sodales ipsum volutpat imperdiet. Proin suscipit neque id nisi vehicula sagittis. Aenean at bibendum dui, ac ultrices urna. Morbi eget ultrices augue. Quisque a rhoncus risus. In sit amet gravida nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non imperdiet urna. Suspendisse nisi mi, laoreet vel libero non, commodo volutpat augue.",
    tags: "Horse"
  };

  function removeActiveListSelector() {
      var liElements = $(".selectionNames > ul > li"), index;
      for (index = 0; index < liElements.length; index++) {
          $(liElements[index]).removeClass('active');
      }
  }

  $('.selectionNames > ul > li').click(function(e) {
      removeActiveListSelector();
      $(this).addClass('active');
  });

}]);
