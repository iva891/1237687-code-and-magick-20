'use strict';

// Открытие и закрытие модального окна

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var setupInput = document.querySelector('.setup-user-name');
  var focusCatcher = false;

  setupInput.addEventListener('focus', function () {
    focusCatcher = true;
  });

  setupInput.addEventListener('blur', function () {
    focusCatcher = false;
  });

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape' && !focusCatcher) {
      evt.preventDefault();
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      closePopup();
    }
  });
})();
