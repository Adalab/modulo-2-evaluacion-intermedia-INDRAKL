"use strict";

const inputUserNumber = document.querySelector(".js_inputUserNumber");
const btnTry = document.querySelector(".js_btnTry");
const textTry = document.querySelector(".js_textTry");
const attemps = document.querySelector(".js_attempts");

let clicksPlayer = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
function updateScore() {
  attemps.innerHTML = `Número de intentos: ${clicksPlayer}`;
}

function getUserNumber() {
  event.preventDefault();
  return parseInt(inputUserNumber.value);
}

function play() {
  const movesPlayer = getUserNumber();
  const movesComputer = getRandomNumber(100);
  clicksPlayer++;

  if (isNaN(movesPlayer) || movesPlayer < 1 || movesPlayer > 100) {
    textTry.innerHTML = "El número debe estar entre 1 y 100";
  } else {
    if (movesPlayer > movesComputer) {
      textTry.innerHTML = "Demasiado alto";
    } else if (movesPlayer < movesComputer) {
      textTry.innerHTML = "Demasiado bajo";
    } else if (movesPlayer === movesComputer) {
      textTry.innerHTML = "¡Has ganado, campeona!";
    }
  }
  updateScore();
  console.log(movesComputer);
}
btnTry.addEventListener("click", play);
