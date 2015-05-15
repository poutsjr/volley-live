'user strict';

angular.module('starter.controllers', [])

    .controller('ResultsCtrl', function($scope, results){
        $scope.results = results;
    })
    .controller('ResultDetailCtrl', function($scope, result) {
        $scope.result = result;
    })

    .controller('TeamsCtrl', function($scope) {

    })

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })



    .controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
