angular.module('starter.controllers', [])


.controller('HomeCtrl', function($scope, $location, UserSettings) {
    $scope.settings = UserSettings.getSettings();

    $scope.removeHotelSelection = function() {
        UserSettings.setSettings('userInHotel', false);
        UserSettings.setSettings('selectedHotel', undefined);
        $location.path("/");
    }
})

.controller('HotelsCtrl', function($scope, $location, Hotels, UserSettings) {
    $scope.hotels = Hotels.all();

    $scope.selectHotel = function(hotel) {
        UserSettings.setSettings('userInHotel', true);
        UserSettings.setSettings('selectedHotel', hotel);
        $location.path("/tab/chats");
    }
})

.controller('ChatsCtrl', function($scope, UserSettings, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

    $scope.settings = UserSettings.getSettings();
    $scope.hotelChats = Chats.hotelAll();
    $scope.hotelBasicChats = Chats.hotelBasicAll();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Users, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
    $scope.user = Users.all;
    $scope.getUser = function(userId) {
        return Users.get(userId);
    }
})

.controller('AccountCtrl', function($scope, UserSettings) {
  $scope.settings = UserSettings.getSettings();
});
