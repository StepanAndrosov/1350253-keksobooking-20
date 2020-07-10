'use strict';
(function () {
  var main = document.querySelector('.main');
  var success = document.querySelector('#success')
  .content
  .querySelector('.success');

  var err = document.querySelector('#error')
  .content
  .querySelector('.error');

  var errButton = err.querySelector('.error__button');

  success.tabIndex = '1';

  var openSusses = function () {
    main.appendChild(success);

    document.addEventListener('keydown', onEscapeKeydown);
    success.addEventListener('click', onSuccessClick);
  };

  var removeSuccess = function () {
    success.remove();

    document.removeEventListener('keydown', onEscapeKeydown);
  };

  var openErr = function () {
    main.appendChild(err);

    document.addEventListener('keydown', onEscapeKeydown);
    err.addEventListener('click', onErrClick);
    errButton.addEventListener('click', onErrButtonClick);
  };

  var removeErr = function () {
    err.remove();

    document.removeEventListener('keydown', onEscapeKeydown);
    document.removeEventListener('click', onErrClick);
  };

  var onEscapeKeydown = function (evt) {
    if (window.util.escapePress(evt)) {
      removeSuccess();
      removeErr();
    }
  };

  var onSuccessClick = function (evt) {
    if (window.util.mouseButtonClick(evt)
      && evt.target === success) {
      removeSuccess();
    }
  };

  var onErrButtonClick = function (evt) {
    if (window.util.mouseButtonClick(evt)) {
      removeSuccess();
    }
  };

  var onErrClick = function (evt) {
    if (window.util.mouseButtonClick(evt)
      && evt.target === err) {
      removeErr();
    }
  };

  window.alert = {
    openSusses: openSusses,
    openErr: openErr,
  };


})();
