'use strict';


var ADJUSTMENT_PIN_X = 25;
var ADJUSTMENT_PIN_Y = 70;
var VALUE_LOCATION_X_MIN = 26;
var VALUE_LOCATION_X_MAX = 1170;
var VALUE_LOCATION_Y_MIN = 130;
var VALUE_LOCATION_Y_MAX = 560;
var map = document.querySelector('.map');
map.classList.remove('map--faded');

var typeOffers = ['palace', 'flat', 'house', 'bungalo'];
var checkInOutOffers = ['12:00', '13:00', '14:00']
var featuresOffers = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']
var randomFeatures = []

for (var i = 0; i < getRandomIntInclusive(1,6); i++) {
  randomFeatures[i] = featuresOffers[i]
}

var createObj = function (obj, key, value) {
 for (var i = 0; i < key.length; i++) {
  obj[key[i]] = value[i];
}
}

//AUTHOR
var objAuthor = {}
var keyAuthor = ['avatar'];
var valueAuthor = ['img/avatars/user0' + getRandomIntInclusive(1, 8) +'.png']

createObj(objAuthor ,keyAuthor, valueAuthor)

//OFFER
var objOffer = {}
var keysOffer = ['title', 'address', 'price', 'type', 'rooms', 'guests', 'checkin', 'checkout', 'features', 'description']
var valueOffer = ['строка, заголовок предложения', 'location.x, location.y', getRandomIntInclusive(1, 100000), typeOffers[getRandomIntInclusive(0,3)], getRandomIntInclusive(1, 20), getRandomIntInclusive(1, 10), checkInOutOffers[getRandomIntInclusive(0,2)], checkInOutOffers[getRandomIntInclusive(0,2)], randomFeatures, 'строка с описанием']

createObj(objOffer ,keysOffer, valueOffer)

//LOCATION
var objLocation = {}
var keysLocation = ['x', 'y']
var valueLocation = [getRandomIntInclusive(VALUE_LOCATION_X_MIN, VALUE_LOCATION_X_MAX) - ADJUSTMENT_PIN_X, getRandomIntInclusive(VALUE_LOCATION_Y_MIN, VALUE_LOCATION_Y_MAX) - ADJUSTMENT_PIN_Y]

createObj(objLocation ,keysLocation, valueLocation)

//THE BIGGEST
var objectJs = {}
var keyApartment = ['author', 'offer', 'location'];
var valueApartments = [objAuthor, objOffer, objLocation]

createObj(objectJs, keyApartment, valueApartments)

var apartments = []
for (var i = 0; i < 8; i++) {
  apartments[i] = objectJs;
}


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



