angular.module('starter.services', [])

.factory('UserSettings', function() {
  var settings = {
    checkInHotel: false,
    selectedHotelId: 1,
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
        },
          {
              id: 5,
              img: '/img/hotel_concierge.png',
              username: 'Manager'
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
          messages: [
              {
                  userId: 5,
                  text: 'Dear Guest, breakfast 07.00 - 10.00',
                  date: 'Today, 1h ago'
              },
              {
                  userId: 3,
                  text: 'Does breakfast service include no lactosa milk?',
                  date: 'Today, 32m ago'
              },
              {
                  userId: 5,
                  text: 'We don\'t, but I am going to order it to include it tomorrow. Which room number?',
                  date: 'Today, 28m ago'
              },
              {
                  userId: 3,
                  text: 'Thanks a lot. Number 201',
                  date: 'Today, 13m ago'
              }
          ],
        face: '/img/concierge.png'
      }
  ];

  // Some fake testing data
  var hotelChats = [{
    id: 0,
    name: 'Hanging out at Hotel bar',
    description: 'You on your way?',
      messages: [
          {
              userId: 4,
              text: 'Hi guys, my name is John, I was planning to grab a beer at bar in a few minutes, if anyone wants want to hang out, I am glat to know new peeps.',
              date: 'Today, 1h ago'
          },
          {
              userId: 1,
              text: 'Hi John, I am coming with a friend of mine too. See u there',
              date: 'Today, 32m ago'
          }
      ],
    face: '/img/lobby-bar.jpg'
  }, {
    id: 1,
    name: 'Going out for dinner',
    description: 'Who is in tonight for tapas',
      messages: [
          {
              userId: 3,
              text: 'My and my boyfriend are planning to have dinner around the hotel. Anyone knows recomend us a restaurant around?',
              date: 'Today, 1h ago'
          },
          {
              userId: 2,
              text: 'A couple of squares left there is one called King Landing, highly recommended. If you go order beef !!',
              date: 'Today, 32min ago'
          },
          {
              userId: 3,
              text: 'Thanks, we will',
              date: 'Today, 2min ago'
          }
      ],
    face: '/img/dinner.png'
  },  {
    id: 4,
    name: 'Sharing taxi',
    description: 'This is wicked good ice cream.',
      messages: [
          {
              userId: 4,
              text: 'We are going tomorrow morning to the aiport, anyone interested in sharing?',
              date: 'Today, 1h ago'
          }
      ],
    face: '/img/taxi.jpg'
  }];


    var cityChats = [{
        id: 2,
        name: 'Visiting city',
        description: 'I should buy a boat',
        messages: [
            {
                userId: 3,
                text: 'I am going to stay at the city just for a couple of days. Anyone knows if it is worthy visiting Kafka musseum?',
                date: 'Today, 1h ago'
            },
            {
                userId: 4,
                text: 'Beyond a shadow of a doubt, you shouldn\'t skip that musseum',
                date: 'Today, 32min ago'
            }
        ],
        face: '/img/duss-city.jpg'
    }, {
        id: 3,
        name: 'Party',
        description: 'Look at my mukluks!',
        messages: [
            {
                userId: 3,
                text: 'We are a group of three friends that want to go to Magaluf, Anyone is up for it?',
                date: 'Today, 1h ago'
            },
            {
                userId: 1,
                text: 'Sure !!! :). What time?',
                date: 'Today, 32min ago'
            },
            {
                userId: 3,
                text: '21.00 at Lobby',
                date: 'Today, 2min ago'
            }
        ],
        face: '/img/bagpack.jpg'
    }
    ];

  return {
    hotelAll: function() {
      return hotelChats;
    },
      cityAll: function() {
          return cityChats;
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
        for (var i = 0; i < cityChats.length; i++) {
            if (cityChats[i].id === parseInt(chatId)) {
                return cityChats[i];
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
    name: 'Nikko',
    description: 'Best bar ever',
    distance: '0.1 km away',
    location: 'Dusseldorf',
    img: '/img/hotel.jpeg'
  }, {
    id: 1,
    name: 'Max Lynx',
    description: 'Good restaurant',
    distance: '0.2 km away',
      location: 'Dusseldorf',
    img: '/img/hotel.jpeg'
  },{
    id: 2,
    name: 'Best Western City',
    description: 'Clean rooms and good service',
    distance: 'distance 0.5 km away',
      location: 'Dusseldorf',
    img: '/img/hotel.jpeg'
  }, {
    id: 3,
    name: 'Motel One Hauptbahn',
    description: 'Friendly enviroment',
    distance: '0.8 km away',
      location: 'Dusseldorf',
    img: '/img/hotel.jpeg'
  }, {
    id: 4,
    name: 'Hotel Mitte',
    description: 'Pets are welcomed here.',
    distance: 'distance 1.2 km away',
      location: 'Dusseldorf',
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
