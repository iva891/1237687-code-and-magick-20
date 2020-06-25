'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TITLE_X = 110;
var TITLE_Y = 30;

var FONT = '16px PT Mono';
var BASELINE = 'hanging';
var COLOR_BLACK = '#000';
var COLOR_WHITE = '#fff';
var COLOR_GREY = 'rgba(0, 0, 0, 0.7)';
var COLOR_RED = 'rgba(255, 0, 0, 1)';

var BAR_GAP = 50;
var BAR_WIDTH = 40;
var TEXT_Y = 250;
var TEXT_HEIGHT = 30;
var MAX_HEIGHT = 150;

var renderRect = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderTitle = function (ctx, font, line, color, x, y) {
  ctx.font = font;
  ctx.textBaseline = line;
  ctx.fillStyle = color;
  ctx.fillText('Ура вы победили!', x, y);
  ctx.fillText('Список результатов:', x, y + 20);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getDivision = function (dividend, divisor) {
  var quotient = dividend / divisor;
  return quotient;
};

var randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

window.renderStatistics = function (ctx, players, times) {
  renderRect(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, COLOR_GREY);
  renderRect(ctx, CLOUD_X, CLOUD_Y, COLOR_WHITE);

  renderTitle(ctx, FONT, BASELINE, COLOR_BLACK, TITLE_X, TITLE_Y);

  ctx.fillStyle = COLOR_BLACK;

  var maxTime = getMaxElement(times);
  var rateTime = getDivision(MAX_HEIGHT, maxTime);

  var positionX = function (index) {
    return CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * index;
  };

  var renderPlayersStat = function (index) {
    ctx.fillText(players[index], positionX(index), TEXT_Y);
    if (players[index] === 'Вы') {
      ctx.fillStyle = COLOR_RED;
    } else {
      var randomColor = randomNumber(0, 100);
      ctx.fillStyle = 'hsl(240, ' + randomColor + '%, 50%)';
    }
    ctx.fillRect(positionX(index), CLOUD_HEIGHT - TEXT_HEIGHT - (rateTime * times[index]), BAR_WIDTH, rateTime * times[index]);
    ctx.fillStyle = COLOR_BLACK;
    ctx.fillText(Math.round(times[index]), positionX(index), CLOUD_HEIGHT - (TEXT_HEIGHT * 1.5) - (rateTime * times[index]));
  }

  for (var i = 0; i < players.length; i++) {
    renderPlayersStat(i);
  }
};
