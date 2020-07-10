'use strict';
(function () {

  var KeyCode = {
    ENTER: 'Enter',
    ESCAPE: 'Escape',
  };

  var mouseButton = 0;

  var enterPress = function (evt) {
    return evt.key === KeyCode.ENTER;
  };

  var escapePress = function (evt) {
    return evt.key === KeyCode.ESCAPE;
  };

  var mouseButtonClick = function (evt) {
    return evt.key === mouseButton;
  };

  window.util = {
    enterPress: enterPress,
    escapePress: escapePress,
    mouseButtonClick: mouseButtonClick,
  };
})();
