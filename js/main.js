"use strict";

const inputUserNumber = document.querySelector(".js_inputUserNumber");
const btnTry = document.querySelector(".js_btnTry");
const textTry = document.querySelector(".js_textTry");
const attemps = document.querySelector(".js_attempts");
const btnReset = document.querySelector(".js_btnReset");
let movesComputer = getRandomNumber();

let clicksPlayer = "";

function updateScore() {
  clicksPlayer++;
  attemps.innerHTML = `Número de intentos: ${clicksPlayer}`;
}

function getUserNumber() {
  return parseInt(inputUserNumber.value);
}

function showText(message) {
  textTry.innerHTML = message;
}
function play(event) {
  event.preventDefault();

  if (clicksPlayer < 10) {
    const movesPlayer = getUserNumber();

    if (isNaN(movesPlayer) || movesPlayer < 1 || movesPlayer > 100) {
      showText("El número debe estar entre 1 y 100");
    } else {
      if (movesPlayer > movesComputer) {
        showText("Demasiado alto");
      } else if (movesPlayer < movesComputer) {
        showText("Demasiado bajo");
      } else if (movesPlayer === movesComputer) {
        showText("¡Has ganado, campeona!");
      }
      console.log(movesComputer);
    }
  } else {
    showText(
      "El juego ha terminado, has alcanzado el número de intentos máximo."
    );
  }

  updateScore();
}

function resetGame(event) {
  event.preventDefault();
  clicksPlayer = 0;
  movesComputer = getRandomNumber();
  attemps.innerHTML = "Número de intentos: 0";
  textTry.innerHTML = "";
  inputUserNumber.value = "";
}

btnTry.addEventListener("click", play);
btnReset.addEventListener("click", resetGame);

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
