angular.module('starter.controllers', [])

.controller('HotelsCtrl', function($scope, Hotels) {
      $scope.hotels = Hotels.all();
      $scope.remove = function(hotel) {
        Hotels.remove(hotel);
      }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.hotelChats = Chats.hotelAll();
  $scope.hotelBasicChats = Chats.hotelBasicAll();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    suggestHotel: true
  };
});
