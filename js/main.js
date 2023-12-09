"use strict";

const inputUserNumber = document.querySelector(".js_inputUserNumber");
const btnTry = document.querySelector(".js_btnTry");
const textTry = document.querySelector(".js_textTry");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function getUserNumber(event) {
  event.preventDefault();
  const userNumber = parseInt(inputUserNumber.value);
  if (!isNaN(userNumber) && userNumber >= 1 && userNumber <= 100) {
    return userNumber;
  } else return "Introduce un número válido, por favor";
}

function play() {
  const movesPlayer = getUserNumber();
  const movesComputer = getRandomNumber();

  if (movesPlayer > movesComputer) {
    textTry.innerHTML = "Demasido alto";
  } else if (movesPlayer > movesComputer) {
    textTry.innerHTML = "Demasiado bajo";
  } else {
    textTry.innerHTML = "¡Has ganado, campeona!";
  }
}

btnTry.addEventListener("click", play);
