'use strict';

// Изменение цвета мантии, глаз и фаербола

(function () {
  var COLOR_HEX = ['#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var wizardInputCoat = document.querySelector('input[name=coat-color]');
  var wizardInputEyes = document.querySelector('input[name=eyes-color]');
  var wizardInputFireball = document.querySelector('input[name=fireball-color]');

  var paint = function (element, input, array) {
    element.addEventListener('click', function () {
      var randomColor = array[window.insert.getRandomIndex(array)];
      if (element.tagName.toLowerCase() === 'div') {
        element.style.background = randomColor;
      } else {
        element.style.fill = randomColor;
      }
      input.value = randomColor;
    });
  };

  paint(wizardCoat, wizardInputCoat, window.insert.COLORS);
  paint(wizardEyes, wizardInputEyes, window.insert.COLORS_TEXT);
  paint(wizardFireball, wizardInputFireball, COLOR_HEX);
})();
