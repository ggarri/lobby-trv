angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    description: 'You on your way?',
    face: '/img/profile.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    description: 'Hey, it\'s me',
    face: '/img/profile.png'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    description: 'I should buy a boat',
    face: '/img/profile.png'
  }, {
    id: 3,
    name: 'Perry Governor',
    description: 'Look at my mukluks!',
    face: '/img/profile.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    description: 'This is wicked good ice cream.',
    face: '/img/profile.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('Hotels', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var hotels = [{
    id: 0,
    name: 'Nikko Düsseldorf',
    description: 'Dusseldorf, 0.7 km to City centre',
    img: '/img/hotel.jpeg'
  }, {
    id: 1,
    name: 'Max Lynx',
    description: 'Dusseldorf, 0.7 km to City centre',
    img: '/img/hotel.jpeg'
  },{
    id: 2,
    name: 'Best Western Düsseldorf City',
    description: 'Dusseldorf, 3.7 km to City centre',
    img: '/img/hotel.jpeg'
  }, {
    id: 3,
    name: 'Motel One Düsseldorf Hauptba',
    description: 'Dusseldorf, 0.6 km to City centre',
    img: '/img/hotel.jpeg'
  }, {
    id: 4,
    name: 'Düsseldorf Mitte',
    description: 'Dusseldorf, 0.7 km to City centr',
    img: '/img/hotel.jpeg'
  }];

  return {
    all: function() {
      return hotels;
    },
    remove: function(hotel) {
      hotels.splice(hotels.indexOf(hotel), 1);
    },
    get: function(hotelId) {
      for (var i = 0; i < hotels.length; i++) {
        if (hotels[i].id === parseInt(hotelId)) {
          return hotels[i];
        }
      }
      return null;
    }
  };
});
