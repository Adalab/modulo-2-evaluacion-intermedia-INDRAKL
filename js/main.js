"use strict";

const inputUserNumber = document.querySelector(".js_inputUserNumber");
const btnTry = document.querySelector(".js_btnTry");
const textTry = document.querySelector(".js_textTry");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function getUserNumber() {
  event.preventDefault();
  const userNumber = parseInt(inputUserNumber.value);
  if (!isNaN(userNumber) && userNumber >= 1 && userNumber <= 100) {
    return userNumber;
  } else return "Introduce un número válido, por favor";
}

function play() {
  const movesPlayer = getUserNumber();
  const movesComputer = getRandomNumber(100);

  if (movesPlayer > movesComputer) {
    textTry.innerHTML = "Demasiado alto";
  } else if (movesPlayer < movesComputer) {
    textTry.innerHTML = "Demasiado bajo";
  } else if (movesPlayer === movesComputer) {
    textTry.innerHTML = "¡Has ganado, campeona!";
  }
  console.log(movesComputer);
}

btnTry.addEventListener("click", play);
