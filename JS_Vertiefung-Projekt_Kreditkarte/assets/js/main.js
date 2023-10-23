const cardNumber = document.getElementById("cardNumber");

const cardHolder = document.getElementById("cardHolder");

const expirationDate = document.getElementById("expirationDate");

const number = document.getElementById("number");

const holder = document.getElementById("holder");

const expires = document.getElementById("expires");

number.textContent = "#### #### #### ####";

holder.textContent = "FULL NAME";

expires.textContent = "MM/YY";

function cardSubmit() {
  number.textContent = cardNumber.value;

  holder.textContent = cardHolder.value;

  expires.textContent = expirationDate.value;
}
