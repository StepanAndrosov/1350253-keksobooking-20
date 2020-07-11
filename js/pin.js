'use strict';

(function () {
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

  window.backend.load(function (apartments) {
    apartments.forEach(function (apartment) {
      fragment.appendChild(renderPin(apartment));
    });
  }, function () {});

  window.pin = {
    fragment: fragment,
  };

})();
