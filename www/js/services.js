angular.module('starter.services', [])

.factory('UserSettings', function() {
  var settings = {
    userInHotel: false,
    selectedHotel: undefined,
    suggestHotel: true,
    userId: 4
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

.factory('Users', function() {
      var users = [
        {
          id: 1,
          img: '/img/tyrion.jpg',
          username: 'Tyrion'
        },
        {
          id: 2,
          img: '/img/cersie.jpg',
          username: 'Cersie'
        },
        {
          id: 3,
          img: '/img/sansa.jpg',
          username: 'Sansa'
        },
        {
          id: 4,
          img: '/img/johnS.jpg',
          username: 'John Snow'
        }
      ];

      return {
        all: function () {
          return users;
        },
        get: function(userId) {
          for (var i = 0; i < users.length; i++) {
            if (users[i].id === parseInt(userId)) {
              return users[i];
            }
          }
          return null;
        }
      };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  var hotelBasicChats = [{
        id: 'L',
        name: 'Lobby',
        description: 'What\'s Dudes',
        face: '/img/lobby.png',
        messages: [
          {
            userId: 1,
            text: 'Hi guys, I&gf just came to the city. Do you recomend somewhere to go?',
            date: 'Today, 1h ago'
          },
          {
            userId: 2,
            text: 'Hi Tyrion, I highly recommend you to visit the cathedral inside. It is wonderful.',
            date: 'Today, 32m ago'
          },
          {
            userId: 1,
            text: 'Thxs Cersie',
            date: 'Today, 28m ago'
          }
        ]
      },
      {
        id: 'C',
        name: 'Concierge',
        description: 'What\'s up Guests',
        face: '/img/concierge.png'
      }
  ];

  // Some fake testing data
  var hotelChats = [{
    id: 0,
    name: 'Hanging out in hotel bar',
    description: 'You on your way?',
    face: '/img/lobby-bar.jpg'
  }, {
    id: 1,
    name: 'Going out for dinner',
    description: 'Who is in tonight for tapas',
    face: '/img/dinner.png'
  },{
    id: 2,
    name: 'Visiting city',
    description: 'I should buy a boat',
    face: '/img/duss-city.jpg'
  }, {
    id: 3,
    name: 'Daily planning',
    description: 'Look at my mukluks!',
    face: '/img/bagpack.jpg'
  }, {
    id: 4,
    name: 'Sharing taxi',
    description: 'This is wicked good ice cream.',
    face: '/img/taxi.jpg'
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
