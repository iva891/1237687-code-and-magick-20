'use strict';
(function () {

  var setupDialogElement = document.querySelector('.setup');
  var dialogHandle = setupDialogElement.querySelector('.upload');
  var startCoords = {
    x: 0,
    y: 0
  };
  var dragged;

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    dragged = true;

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
    setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
        clickEvt.preventDefault();
        dialogHandle.removeEventListener('click', onClickPreventDefault);
      };
      dialogHandle.addEventListener('click', onClickPreventDefault);
    }
  };

  var onDialogHandleClick = function (evt) {
    evt.preventDefault();

    startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    dragged = false;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  };

  dialogHandle.addEventListener('mousedown', onDialogHandleClick);

})();
