angular.module('starter.controllers', [])

    .controller('ResultsCtrl', function($scope, ResultSrv, $ionicPopup, $timeout){
        'user strict';

        $scope.messages = ResultSrv.getMessages();



    })
    .controller('ResultDetailCtrl', function($scope, $stateParams, ResultSrv) {
        $scope.result = ResultSrv.getMessage($stateParams.match);
        console.log($scope.result);
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
