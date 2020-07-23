'use strict';

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

// Открытие и закрытие модального окна

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

// Изменение цвета мантии, глаз и фаербола

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
    var randomColor = array[getRandomIndex(array)];
    if (element.tagName.toLowerCase() === 'div') {
      element.style.background = randomColor;
    } else {
      element.style.fill = randomColor;
    }
    input.value = randomColor;
  });
};

paint(wizardCoat, wizardInputCoat, COLORS);
paint(wizardEyes, wizardInputEyes, COLORS_TEXT);
paint(wizardFireball, wizardInputFireball, COLOR_HEX);
