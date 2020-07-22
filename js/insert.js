'use strict';
(function () {
  var WIZARD_QUANTITY = 4;

  var NAMES = ['Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var SURNAMES = ['да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var COLORS = ['rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var COLORS_TEXT = ['black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var getRandomIndex = function (array) {
    return Math.floor(Math.random() * array.length);
  };

  var wizards = [];

  var createWizard = function (names, surnames, colors, colorsText) {
    var name = names[getRandomIndex(names)] + ' ' + surnames[getRandomIndex(surnames)];
    var coatColor = colors[getRandomIndex(colors)];
    var eyesColor = colorsText[getRandomIndex(colorsText)];

    var wizard = {
      name: name,
      coatColor: coatColor,
      eyesColor: eyesColor,
    };

    wizards.push(wizard);
  };

  for (var i = 0; i < WIZARD_QUANTITY; i++) {
    createWizard(NAMES, SURNAMES, COLORS, COLORS_TEXT);
  }

  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  document.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  var insertWizards = function (array) {
    for (i = 0; i < array.length; i++) {
      fragment.appendChild(renderWizard(array[i]));
    }
    similarListElement.appendChild(fragment);
  };

  insertWizards(wizards);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  window.insert = {
    getRandomIndex: getRandomIndex,
    COLORS: COLORS,
    COLORS_TEXT: COLORS_TEXT
  };
})();
