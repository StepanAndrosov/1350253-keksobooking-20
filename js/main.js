'use strict';

var map = document.querySelector('.map');
map.classList.remove('map--faded');

var typeOffers = ['palace', 'flat', 'house', 'bungalo'];
var checkInOutOffers = ['12:00', '13:00', '14:00']
var featuresOffers = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']
var randomFeatures = []

for (var i = 0; i < getRandomIntInclusive(1,6); i++) {
  randomFeatures[i] = featuresOffers[i]
}

var apartments = [
  {
    "author": {
      "avatar": "img/avatars/user0" + getRandomIntInclusive(1, 8) +".png"
    },
    "offer": {
      "title": 'строка, заголовок предложения',
      "address": "location.x, location.y",
      "price": getRandomIntInclusive(1, 100000),
      "type": typeOffers[getRandomIntInclusive(0,3)],
      "rooms": getRandomIntInclusive(1, 20),
      "guests": getRandomIntInclusive(1, 10),
      "checkin": checkInOutOffers[getRandomIntInclusive(0,2)],
      "checkout": checkInOutOffers[getRandomIntInclusive(0,2)],
      "features": randomFeatures,
      "description": 'строка с описанием',
  },
    "location": {
      "x": getRandomIntInclusive(1, 1170),
      "y": getRandomIntInclusive(130, 630)
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user0" + getRandomIntInclusive(1, 8) +".png"
    },
    "offer": {
      "title": 'строка, заголовок предложения',
      "address": "location.x, location.y",
      "price": getRandomIntInclusive(1, 100000),
      "type": typeOffers[getRandomIntInclusive(0,3)],
      "rooms": getRandomIntInclusive(1, 20),
      "guests": getRandomIntInclusive(1, 10),
      "checkin": checkInOutOffers[getRandomIntInclusive(0,2)],
      "checkout": checkInOutOffers[getRandomIntInclusive(0,2)],
      "features": randomFeatures,
      "description": 'строка с описанием',
  },
    "location": {
      "x": getRandomIntInclusive(1, 1170),
      "y": getRandomIntInclusive(130, 630)
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user0" + getRandomIntInclusive(1, 8) +".png"
    },
    "offer": {
      "title": 'строка, заголовок предложения',
      "address": "location.x, location.y",
      "price": getRandomIntInclusive(1, 100000),
      "type": typeOffers[getRandomIntInclusive(0,3)],
      "rooms": getRandomIntInclusive(1, 20),
      "guests": getRandomIntInclusive(1, 10),
      "checkin": checkInOutOffers[getRandomIntInclusive(0,2)],
      "checkout": checkInOutOffers[getRandomIntInclusive(0,2)],
      "features": randomFeatures,
      "description": 'строка с описанием',
  },
    "location": {
      "x": getRandomIntInclusive(1, 1170),
      "y": getRandomIntInclusive(130, 630)
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user0" + getRandomIntInclusive(1, 8) +".png"
    },
    "offer": {
      "title": 'строка, заголовок предложения',
      "address": "location.x, location.y",
      "price": getRandomIntInclusive(1, 100000),
      "type": typeOffers[getRandomIntInclusive(0,3)],
      "rooms": getRandomIntInclusive(1, 20),
      "guests": getRandomIntInclusive(1, 10),
      "checkin": checkInOutOffers[getRandomIntInclusive(0,2)],
      "checkout": checkInOutOffers[getRandomIntInclusive(0,2)],
      "features": randomFeatures,
      "description": 'строка с описанием',
  },
    "location": {
      "x": getRandomIntInclusive(1, 1170),
      "y": getRandomIntInclusive(130, 630)
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user0" + getRandomIntInclusive(1, 8) +".png"
    },
    "offer": {
      "title": 'строка, заголовок предложения',
      "address": "location.x, location.y",
      "price": getRandomIntInclusive(1, 100000),
      "type": typeOffers[getRandomIntInclusive(0,3)],
      "rooms": getRandomIntInclusive(1, 20),
      "guests": getRandomIntInclusive(1, 10),
      "checkin": checkInOutOffers[getRandomIntInclusive(0,2)],
      "checkout": checkInOutOffers[getRandomIntInclusive(0,2)],
      "features": randomFeatures,
      "description": 'строка с описанием',
  },
    "location": {
      "x": getRandomIntInclusive(1, 1170),
      "y": getRandomIntInclusive(130, 630)
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user0" + getRandomIntInclusive(1, 8) +".png"
    },
    "offer": {
      "title": 'строка, заголовок предложения',
      "address": "location.x, location.y",
      "price": getRandomIntInclusive(1, 100000),
      "type": typeOffers[getRandomIntInclusive(0,3)],
      "rooms": getRandomIntInclusive(1, 20),
      "guests": getRandomIntInclusive(1, 10),
      "checkin": checkInOutOffers[getRandomIntInclusive(0,2)],
      "checkout": checkInOutOffers[getRandomIntInclusive(0,2)],
      "features": randomFeatures,
      "description": 'строка с описанием',
  },
    "location": {
      "x": getRandomIntInclusive(1, 1170),
      "y": getRandomIntInclusive(130, 630)
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user0" + getRandomIntInclusive(1, 8) +".png"
    },
    "offer": {
      "title": 'строка, заголовок предложения',
      "address": "location.x, location.y",
      "price": getRandomIntInclusive(1, 100000),
      "type": typeOffers[getRandomIntInclusive(0,3)],
      "rooms": getRandomIntInclusive(1, 20),
      "guests": getRandomIntInclusive(1, 10),
      "checkin": checkInOutOffers[getRandomIntInclusive(0,2)],
      "checkout": checkInOutOffers[getRandomIntInclusive(0,2)],
      "features": randomFeatures,
      "description": 'строка с описанием',
  },
    "location": {
      "x": getRandomIntInclusive(1, 1170),
      "y": getRandomIntInclusive(130, 630)
    }
  },
  {
    "author": {
      "avatar": "img/avatars/user0" + getRandomIntInclusive(1, 8) +".png"
    },
    "offer": {
      "title": 'строка, заголовок предложения',
      "address": "location.x, location.y",
      "price": getRandomIntInclusive(1, 100000),
      "type": typeOffers[getRandomIntInclusive(0,3)],
      "rooms": getRandomIntInclusive(1, 20),
      "guests": getRandomIntInclusive(1, 10),
      "checkin": checkInOutOffers[getRandomIntInclusive(0,2)],
      "checkout": checkInOutOffers[getRandomIntInclusive(0,2)],
      "features": randomFeatures,
      "description": 'строка с описанием',
  },
    "location": {
      "x": getRandomIntInclusive(1, 1170),
      "y": getRandomIntInclusive(130, 630)
    }
  }
]


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

var mapPin = document.querySelector('.map__pins') //Метки объявлений

var pinOffer = document.querySelector('#pin')
.content
.querySelector('.map__pin')


var renderPin = function(apartment) {

  var pinElement = pinOffer.cloneNode(true)

  pinElement.querySelector('img').src = apartment.author.avatar
  pinElement.querySelector('img').alt = apartment.offer.title
  pinElement.style.left = apartment.location.x + 'px'
  pinElement.style.top = apartment.location.y + 'px'

return pinElement
}

var fragment = document.createDocumentFragment();

for (var i = 0; i < apartments.length; i++) {
fragment.appendChild(renderPin(apartments[i]))
}

mapPin.appendChild(fragment)



