'use strict';

(function () {

  var AdjustmentPin = {
    X: 25,
    Y: 70,
  };

  var ValueLocation = {
    X_MIN: 26,
    X_MAX: 1170,
    Y_MIN: 130,
    Y_MAX: 560,
  };

  var typeOffers = ['palace', 'flat', 'house', 'bungalo'];
  var checkInOutOffers = ['12:00', '13:00', '14:00'];
  var featuresOffers = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var randomFeatures = featuresOffers.slice(0, getRandomIntInclusive(1, featuresOffers.length));
  var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg', 'http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
  var randomPhotos = photos.slice(0, getRandomIntInclusive(1, photos.length));

  var createArray = function () {
    var apartments = [];
    var length = getRandomIntInclusive(1, 8);
    for (var i = 0; i < length; i++) {
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
          x: getRandomIntInclusive(ValueLocation.X_MIN, ValueLocation.X_MAX) - AdjustmentPin.X,
          y: getRandomIntInclusive(ValueLocation.Y_MIN, ValueLocation.Y_MAX) - AdjustmentPin.Y
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

  window.data = {
    apartments: apartments,
  };

})();
