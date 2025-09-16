// JavaScript Guess My Number
'use strict';

// CONSTANTS
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

// cached selectors
const messageE1 = document.querySelector('.message');
const scoreE1 = document.querySelector('.score');
const numberE1 = document.querySelector('.number');
const highscoreE1 = document.querySelector('.highscore');
const guessE1 = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

// UI Helper
function setMessage(text) {
  messageEl.textContent = text;
}

function setNumber(value) {
  numberEl.textContent = value;
}

function setScore(value) {
  scoreEl.textContent = value;
}

function setHighscore(value) {
  highscoreEl.textContent = value;
}

function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}

function disablePlay(disabled) {
  guessInputEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}

function clearInput() {
  guessInputEl.value = '';
}

// Game Statement
// Secret Number
let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
console.log('First Secret number:', secretNumber);

// track the current score (this is your current score)
let score = START_SCORE;
let highscore = 0;

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackground('');
}

renderInitialUI();

// Basic Game Logic Implementation
checkBtnEl.addEventListener('click', function () {
  const guess = Number(guessInputEl.value);
  console.log('Players guessed:', guess);

  // input validation
  // new
  if (!guess) return setMessage('Please input a number.');
  if (guess < MIN_NUMBER || guess > MAX_NUMBER)
    return setMessage(
      `Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`
    );

  if (guess === secretNumber) {
    setMessage('You have won!!!!🎉');
    setNumber(secretNumber);
    setBackground('green');
    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }
    disablePlay(true);
    clearInput();
    return;
  }

  // wrong guess
  setMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
  score--;
  setScore(score);

  if (score < 1) {
    setMessage('Game Over. Please press again!💥');
    setNumber(secretNumber);
    setBackground('red');
    disablePlay(true);
    clearInput();
  }
});

againBtnEl.querySelector('.again').addEventListener('click', function () {
  resetGameState();
  renderInitialUI();
});

// Allow pressing Enter to submit the guess
window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});

// Focus input on restart
againBtnEl.addEventListener('click', function () {
  guessInputEl.focus();
});
