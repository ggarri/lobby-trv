angular.module('starter.controllers', [])


.controller('HomeCtrl', function($scope, $location, UserSettings) {
    $scope.settings = UserSettings.getSettings();

    $scope.removeHotelSelection = function() {
        UserSettings.setSettings('checkInHotel', false);
        UserSettings.setSettings('selectedHotelId', undefined);
        $location.path("/");
    }
})

.controller('HotelsCtrl', function($scope, $ionicModal, $location, Hotels, Users, UserSettings) {
    $scope.hotels = Hotels.all();
    $scope.settings = UserSettings.getSettings();
    $scope.user = Users.get($scope.settings.userId);

    $ionicModal.fromTemplateUrl('/templates/checkin.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
        $scope.modal.show();
    };
    $scope.closeModal = function() {
        $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
        // Execute action
    });

    $scope.selectHotel = function(hotel) {
        $scope.openModal();
        $scope.hotel = hotel;
    }

    $scope.checkin = function(hotel) {
        $scope.closeModal();
        UserSettings.setSettings('checkInHotel', true);
        UserSettings.setSettings('selectedHotelId', hotel.id);
        $location.path("/tab/chats");
    }
})

.controller('ChatsCtrl', function($scope, UserSettings, Hotels, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

    $scope.settings = UserSettings.getSettings();
    $scope.hotelChats = Chats.hotelAll();
    $scope.cityChats = Chats.cityAll();
    $scope.hotelBasicChats = Chats.hotelBasicAll();
    $scope.hotel = Hotels.get($scope.settings.selectedHotelId);
})

.controller('ChatDetailCtrl', function($scope, $stateParams, $ionicScrollDelegate, $timeout, UserSettings, Users, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
    $scope.user = Users.all;
    $scope.settings = UserSettings.getSettings();
    $scope.input = {};

    $scope.getUser = function(userId) {
        return Users.get(userId);
    }

    $scope.sendMessage = function(input, chat) {
        var viewScroll = $ionicScrollDelegate.$getByHandle('userMessageScroll')
        if(!chat.messages) {
            chat.messages = [];
        }

        chat.messages.push({
            userId: $scope.settings.userId,
            text: input.message,
            date: 'Just now'
        });
        $scope.reset();

        $timeout(function() {
            viewScroll.scrollBottom(true);
        }, 1000);
    }

    $scope.reset = function()
    {
        $scope.input = {};
    }
})
.directive('inputMessage', function() {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'templates/input-message.html'
    };
})
.controller('AccountCtrl', function($scope, UserSettings) {
  $scope.settings = UserSettings.getSettings();
});
