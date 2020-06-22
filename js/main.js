'use strict';


var ADJUSTMENT_PIN_X = 25;
var ADJUSTMENT_PIN_Y = 70;
var VALUE_LOCATION_X_MIN = 26;
var VALUE_LOCATION_X_MAX = 1170;
var VALUE_LOCATION_Y_MIN = 130;
var VALUE_LOCATION_Y_MAX = 560;

var typeOffers = ['palace', 'flat', 'house', 'bungalo'];
var checkInOutOffers = ['12:00', '13:00', '14:00'];

var featuresOffers = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var randomFeatures = [];

for (var i = 0; i < getRandomIntInclusive(1, featuresOffers.length); i++) {
  randomFeatures[i] = featuresOffers[i];
}

var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg', 'http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var randomPhotos = [];

for (i = 0; i < getRandomIntInclusive(1, photos.length); i++) {
  randomPhotos[i] = photos[i];
}

var createArray = function () {
  var apartments = [];
  var length = 8;
  for (i = 0; i < length; i++) {
    apartments.push({
      author: {
        avatar: 'img/avatars/user0' + getRandomIntInclusive(1, 8) + '.png'
      },
      offer: {
        title: 'строка, заголовок предложения',
        address: 'location.x, location.y',
        price: getRandomIntInclusive(1, 100000),
        type: typeOffers[getRandomIntInclusive(0, 3)],
        rooms: getRandomIntInclusive(1, 20),
        guests: getRandomIntInclusive(1, 10),
        checkin: checkInOutOffers[getRandomIntInclusive(0, 2)],
        checkout: checkInOutOffers[getRandomIntInclusive(0, 2)],
        features: randomFeatures,
        description: 'строка с описанием',
        photos: randomPhotos
      },
      location: {
        x: getRandomIntInclusive(VALUE_LOCATION_X_MIN, VALUE_LOCATION_X_MAX) - ADJUSTMENT_PIN_X,
        y: getRandomIntInclusive(VALUE_LOCATION_Y_MIN, VALUE_LOCATION_Y_MAX) - ADJUSTMENT_PIN_Y
      }
    });
  }
  return apartments;
};

var apartments = createArray();

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var mapPins = document.querySelector('.map__pins');
var pinOffer = document.querySelector('#pin')
.content
.querySelector('.map__pin');


var renderPin = function (apartment) {

  var pinElement = pinOffer.cloneNode(true);

  pinElement.querySelector('img').src = apartment.author.avatar;
  pinElement.querySelector('img').alt = apartment.offer.title;
  pinElement.style.left = apartment.location.x + 'px';
  pinElement.style.top = apartment.location.y + 'px';

  return pinElement;
};

var fragment = document.createDocumentFragment();

for (i = 0; i < apartments.length; i++) {
  fragment.appendChild(renderPin(apartments[i]));
}

mapPins.appendChild(fragment);

var map = document.querySelector('.map');
var notice = document.querySelector('.notice');
var adForm = notice.querySelector('.ad-form');
var mapPinMain = mapPins.querySelector('.map__pin--main');

var addDisabled = function (array) {
for (i = 0; i < array.length; i++) {
  array[i].disabled = true;
}
}

var avatarInput = notice.querySelector('#avatar');
avatarInput.disabled = true;
var titleInput = notice.querySelector('#title');
titleInput.disabled = true;
var priceInput = notice.querySelector('#price');
priceInput.disabled = true;
var fieldsetCheckbox = notice.querySelector('.features');
var featuresInput = fieldsetCheckbox.querySelectorAll('input');
addDisabled(featuresInput);
var magesInput = notice.querySelector('#images');
magesInput.disabled = true;
var selectAll = notice.querySelectorAll('select');
addDisabled(selectAll);

var description = notice.querySelector('#description');
description.disabled = true;

var buttonAll = notice.querySelectorAll('button');
addDisabled(buttonAll);

var removeDisabled = function (array) {
for (i = 0; i < array.length; i++) {
  array[i].disabled = false;
}
}

var openMapAndForm = function () {
  map.classList.remove('map--faded');
  adForm.classList.remove('ad-form--disabled');
  avatarInput.disabled = false;
  titleInput.disabled = false;
  priceInput.disabled = false;
  removeDisabled(featuresInput);
  magesInput.disabled = false;
  removeDisabled(selectAll);
  description.disabled = false;
  removeDisabled(buttonAll);
}
/*var closeMapAndForm = function () {}*/
mapPinMain.addEventListener('mousedown', function (evt) {
if (evt.button === 0) {
  openMapAndForm();
  writeAddressPin();
}
});

mapPinMain.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openMapAndForm();
    writeAddressPin();
    }
  });

var adressValueX = mapPinMain.style.left;
var adressValueY = mapPinMain.style.top;
var address = document.querySelector('#address');

address.value = parseInt(adressValueX) + '-' + parseInt(adressValueY);

var writeAddressPin = function () {
  address.value = (parseInt(adressValueX, 10) - ADJUSTMENT_PIN_X) + '-' + (parseInt(adressValueY, 10) - ADJUSTMENT_PIN_Y);
}


titleInput.addEventListener('invalid', function (evt) {
  if (titleInput.validity.valueMissing) {
    titleInput.setCustomValidity('Обязательное поле');
  } else {
    titleInput.setCustomValidity('');
  }
});

titleInput.addEventListener('input', function () {
  var valueLength = titleInput.value.length;
  var minTitleLenght = 30;
  var maxTitleLenght = 100;
  if (valueLength < minTitleLenght) {
    titleInput.setCustomValidity('Ещё ' + (minTitleLenght - valueLength) + ' симв.');
  } else if (valueLength > maxTitleLenght) {
    titleInput.setCustomValidity('Удалите лишние ' + (valueLength - maxTitleLenght) + ' симв.');
  } else {
    titleInput.setCustomValidity('');
  }
});

var typeSelect = notice.querySelector('#type');

typeSelect.addEventListener('invalid', function (evt) {
  if (typeSelect.validity.valueMissing) {
    typeSelect.setCustomValidity('Обязательное поле');
  } else {
    typeSelect.setCustomValidity('');
  }
});

typeSelect.addEventListener('change', function (evt) {
  if (typeSelect.value === 'bungalo') {
    priceInput.placeholder = "0";
  } else if (typeSelect.value === 'flat') {
    priceInput.placeholder = "1000";
    priceInput.minlength = "1000";
    priceInput.min = "1000";
  } else if (typeSelect.value === 'house') {
    priceInput.placeholder = "5000";
    priceInput.minlength = "5000";
    priceInput.min = "5000";
  } else if (typeSelect.value === 'palace') {
    priceInput.placeholder = "10000";
    priceInput.minlength = "10000";
    priceInput.min = "10000";
  }
});

var timeinSelect = notice.querySelector('#timein')
var timeoutSelect = notice.querySelector('#timeout')

var addSelect = function(evt) {
  var target = evt.target || evt.srcElement;
  var related = target === timeinSelect ? timeoutSelect : timeinSelect;
  related.selectedIndex = target.selectedIndex;
}
var addSelectInOut = function() {
  timeinSelect.addEventListener('change', addSelect);
  timeoutSelect.addEventListener('change', addSelect);
}();

var capacity = document.querySelector("#capacity");
var roomNumber = document.querySelector("#room_number");
roomNumber.addEventListener("change", function() {
  var currentVal = this.value;
  if (currentVal == 100) {
    for (var i = 0; i < capacity.children.length; i++) {
      capacity.children[i].disabled = true;
    }
    capacity.children[capacity.children.length - 1].disabled = false;
    capacity.children[capacity.children.length - 1].selected = true;
  } else if (currentVal == 1) {
    for (var i = 0; i < capacity.children.length; i++) {
      capacity.children[i].disabled = true;
    }
      capacity[capacity.children.length - 2].disabled = false;
      capacity[capacity.children.length - 2].selected = true;
  } else if (currentVal == 2) {
    for (var i = 0; i < capacity.children.length; i++) {
      capacity.children[i].disabled = true;
    }
    capacity[capacity.children.length - 2].disabled = false;
    capacity[capacity.children.length - 3].disabled = false;
    capacity[capacity.children.length - 3].selected = true;
  } else if (currentVal == 3) {
    for (var i = 0; i < capacity.children.length; i++) {
      capacity.children[i].disabled = true;
    }
    capacity[capacity.children.length - 2].disabled = false;
    capacity[capacity.children.length - 3].disabled = false;
    capacity[capacity.children.length - 4].disabled = false;
    capacity[capacity.children.length - 4].selected = true;
  }
  });

