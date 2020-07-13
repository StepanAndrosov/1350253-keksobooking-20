'use strict';
(function () {

  var AdjustmentPin = {
    X: 25,
    Y: 70,
  };

  var mapPins = document.querySelector('.map__pins');
  var map = document.querySelector('.map');
  var notice = document.querySelector('.notice');
  var adForm = notice.querySelector('.ad-form');
  var mapPinMain = mapPins.querySelector('.map__pin--main');
  var avatarInput = notice.querySelector('#avatar');
  var titleInput = notice.querySelector('#title');
  var address = notice.querySelector('#address');
  var typeSelect = notice.querySelector('#type');
  var priceInput = notice.querySelector('#price');
  var timeinSelect = notice.querySelector('#timein');
  var timeoutSelect = notice.querySelector('#timeout');
  var roomNumber = notice.querySelector('#room_number');
  var capacity = notice.querySelector('#capacity');
  var fieldsetCheckbox = notice.querySelector('.features');
  var featuresInput = fieldsetCheckbox.querySelectorAll('input');
  var description = notice.querySelector('#description');
  var magesInput = notice.querySelector('#images');
  var selectAll = notice.querySelectorAll('select');
  var buttonAll = notice.querySelectorAll('button');

  var addDisabled = function (array) {
    for (var i = 0; i < array.length; i++) {
      array[i].disabled = true;
    }
  };

  addDisabled(featuresInput);
  addDisabled(selectAll);
  addDisabled(buttonAll);

  var adFilters = [avatarInput, titleInput, priceInput, magesInput, description];

  for (var i = 0; i < adFilters.length; i++) {
    adFilters[i].disabled = true;
  }

  var removeDisabled = function (array) {
    for (var j = 0; j < array.length; j++) {
      array[j].disabled = false;
    }
  };

  var togglePins = function (visible) {
    var pins = document.querySelectorAll('.map__pin');
    for (var k = 1; k < pins.length; k++) {
      pins[k].style.display = visible ? '' : 'none';
    }
  };

  var openMapAndForm = function () {
    map.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    mapPins.appendChild(window.pin.fragment);
    togglePins(true);

    for (var j = 0; j < adFilters.length; j++) {
      adFilters[j].disabled = false;
    }

    removeDisabled(featuresInput);
    removeDisabled(selectAll);
    removeDisabled(buttonAll);
  };

  var deleteChecked = function (array) {
    for (var k = 0; k < array.length; k++) {
      array[k].checked = false;
    }
  };

  var returnPlaceholder = function (input) {
    input.value = '';
  };

  var returnForms = function () {
    returnPlaceholder(titleInput);
    returnPlaceholder(priceInput);
    returnPlaceholder(description);
    typeSelect.children[1].selected = true;
    timeinSelect.children[0].selected = true;
    timeoutSelect.children[0].selected = true;
    roomNumber.children[0].selected = true;
    capacity.children[2].selected = true;
  };

  var closeMapAndForm = function () {
    map.classList.add('map--faded');
    adForm.classList.add('ad-form--disabled');

    for (var k = 0; k < adFilters.length; k++) {
      adFilters[k].disabled = true;
    }
    deleteChecked(featuresInput);
    addDisabled(featuresInput);
    addDisabled(selectAll);
    addDisabled(buttonAll);
    togglePins(false);
  };

  var buttonReset = notice.querySelector('.ad-form__reset');

  buttonReset.addEventListener('mousedown', function (evt) {
    if (evt.button === 0) {
      closeMapAndForm();
      deleteAdjustment();
      returnForms();
    }
  });

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

  address.value = parseInt(adressValueX, 10) + ', ' + parseInt(adressValueY, 10);

  var writeAddressPin = function () {
    address.value = (parseInt(adressValueX, 10) - AdjustmentPin.X) + ', ' + (parseInt(adressValueY, 10) - AdjustmentPin.Y);
  };

  var deleteAdjustment = function () {
    address.value = parseInt(adressValueX, 10) + ', ' + parseInt(adressValueY, 10);
  };

  titleInput.addEventListener('invalid', function () {
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

  typeSelect.addEventListener('invalid', function () {
    if (typeSelect.validity.valueMissing) {
      typeSelect.setCustomValidity('Обязательное поле');
    } else {
      typeSelect.setCustomValidity('');
    }
  });

  typeSelect.addEventListener('change', function () {
    if (typeSelect.value === 'bungalo') {
      priceInput.placeholder = '0';
      priceInput.min = '0';
    } else if (typeSelect.value === 'flat') {
      priceInput.placeholder = '1000';
      priceInput.minlength = '1000';
      priceInput.min = '1000';
    } else if (typeSelect.value === 'house') {
      priceInput.placeholder = '5000';
      priceInput.minlength = '5000';
      priceInput.min = '5000';
    } else if (typeSelect.value === 'palace') {
      priceInput.placeholder = '10000';
      priceInput.minlength = '10000';
      priceInput.min = '10000';
    }
  });

  var addSelect = function (evt) {
    var target = evt.target || evt.srcElement;
    var related = target === timeinSelect ? timeoutSelect : timeinSelect;
    related.selectedIndex = target.selectedIndex;
  };
  var addSelectInOut = function () {
    timeinSelect.addEventListener('change', addSelect);
    timeoutSelect.addEventListener('change', addSelect);
  };
  addSelectInOut();

  roomNumber.addEventListener('change', function () {
    var currentVal = roomNumber.value;
    if (currentVal === '100') {
      for (i = 0; i < capacity.children.length; i++) {
        capacity.children[i].disabled = true;
      }
      capacity.children[capacity.children.length - 1].disabled = false;
      capacity.children[capacity.children.length - 1].selected = true;
    } else if (currentVal === '1') {
      for (i = 0; i < capacity.children.length; i++) {
        capacity.children[i].disabled = true;
      }
      capacity[capacity.children.length - 2].disabled = false;
      capacity[capacity.children.length - 2].selected = true;
    } else if (currentVal === '2') {
      for (i = 0; i < capacity.children.length; i++) {
        capacity.children[i].disabled = true;
      }
      capacity[capacity.children.length - 2].disabled = false;
      capacity[capacity.children.length - 3].disabled = false;
      capacity[capacity.children.length - 3].selected = true;
    } else if (currentVal === '3') {
      for (i = 0; i < capacity.children.length; i++) {
        capacity.children[i].disabled = true;
      }
      capacity[capacity.children.length - 2].disabled = false;
      capacity[capacity.children.length - 3].disabled = false;
      capacity[capacity.children.length - 4].disabled = false;
      capacity[capacity.children.length - 4].selected = true;
    }
  });
  capacity[capacity.children.length - 4].disabled = true;
  capacity[capacity.children.length - 3].disabled = true;
  capacity[capacity.children.length - 1].disabled = true;
  capacity[capacity.children.length - 2].selected = true;


  adForm.addEventListener('submit', function (evt) {

    window.backend.save(new FormData(adForm), function () {
      closeMapAndForm();
      deleteAdjustment();
      returnForms();
      window.alert.openSusses();
    });
    evt.preventDefault();

  });

})();


