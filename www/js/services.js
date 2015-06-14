angular.module('starter.services', [])

.factory('UserSettings', function() {
  var settings = {
    userInHotel: false,
    selectedHotel: undefined,
    suggestHotel: true
  };

  return {
    getSettings: function() {
      return settings;
    },
    setSettings: function(field, value) {
      settings[field] = value;
    }
  }
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  var hotelBasicChats = [{
        id: 'L',
        name: 'Lobby',
        description: 'What\'s Dudes',
        face: '/img/lobby.png'
      }, {
        id: 'C',
        name: 'Concierge',
        description: 'What\'s up Guests',
        face: '/img/concierge.png'
      }
  ];

  // Some fake testing data
  var hotelChats = [{
    id: 0,
    name: 'Ben Sparrow',
    description: 'You on your way?',
    face: '/img/profile.png'
  }, {
    id: 1,
    name: 'Going for dinner',
    description: 'Who is in tonight for tapas',
    face: '/img/profile.png'
  },{
    id: 2,
    name: 'Visit the city',
    description: 'I should buy a boat',
    face: '/img/profile.png'
  }, {
    id: 3,
    name: 'Drinking in lobby',
    description: 'Look at my mukluks!',
    face: '/img/profile.png'
  }, {
    id: 4,
    name: 'Sharing taxi',
    description: 'This is wicked good ice cream.',
    face: '/img/profile.png'
  }];

  return {
    hotelAll: function() {
      return hotelChats;
    },
    hotelBasicAll: function() {
      return hotelBasicChats;
    },
    remove: function(chat) {
      hotelChats.splice(hotelChats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < hotelBasicChats.length; i++) {
        if (hotelBasicChats[i].id === String(chatId)) {
          return hotelBasicChats[i];
        }
      }
      for (var i = 0; i < hotelChats.length; i++) {
        if (hotelChats[i].id === parseInt(chatId)) {
          return hotelChats[i];
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
    description: 'Dusseldorf, distance 0.1 km away',
    img: '/img/hotel.jpeg'
  }, {
    id: 1,
    name: 'Max Lynx',
    description: 'Dusseldorf, distance 0.2 km away',
    img: '/img/hotel.jpeg'
  },{
    id: 2,
    name: 'Best Western Düsseldorf City',
    description: 'Dusseldorf, distance 0.5 km away',
    img: '/img/hotel.jpeg'
  }, {
    id: 3,
    name: 'Motel One Düsseldorf Hauptba',
    description: 'Dusseldorf, distance 0.8 km away',
    img: '/img/hotel.jpeg'
  }, {
    id: 4,
    name: 'Düsseldorf Mitte',
    description: 'Dusseldorf, distance 1.2 km away',
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
