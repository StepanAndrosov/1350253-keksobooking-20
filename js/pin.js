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

  for (var i = 0; i < window.data.apartments.length; i++) {
    fragment.appendChild(renderPin(window.data.apartments[i]));
  }

  window.pin = {
    fragment: fragment,
  }

})();
