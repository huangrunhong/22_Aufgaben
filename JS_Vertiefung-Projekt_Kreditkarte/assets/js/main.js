const cardNumber = document.getElementById("cardNumber");

const cardHolder = document.getElementById("cardHolder");

const expirationDate = document.getElementById("expirationDate");

const number = document.getElementById("number");

const holder = document.getElementById("holder");

const expires = document.getElementById("expires");

function cardSubmit() {
  const date = expirationDate.value;

  number.textContent = cardNumber.value;

  holder.textContent = cardHolder.value;

  expires.textContent = expirationDate.value;
}
