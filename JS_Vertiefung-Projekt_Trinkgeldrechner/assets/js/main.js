const rechnung = document.getElementById("rechnung");

const people = document.getElementById("people");

const serviceQulity = document.getElementById("serviceQulity");

const thinkGeldText = document.getElementById("thinkGeldText");

const insgesameGeldText = document.getElementById("insgesameGeldText");

const jedeGeldText = document.getElementById("jedeGeldText");

function money() {
  let thinkGeld;
  let insgesameGeld;
  let jedeGeld;
  let peopleNum = Number(people.value);

  if (serviceQulity.value === "bad") {
    thinkGeld = Number(rechnung.value) * 0.02;
    insgesameGeld = Number(rechnung.value) * 1.02;
    jedeGeld = insgesameGeld / peopleNum;

    thinkGeldText.textContent = `Das Thinkgeld ist: ${thinkGeld}`;
    insgesameGeldText.textContent = `Die Gesammtsumme beträgt: ${insgesameGeld}`;
    jedeGeldText.textContent = `Der Preis pro Person ist: ${jedeGeld}`;
  }

  if (serviceQulity.value === "middle") {
    thinkGeld = Number(rechnung.value) * 0.1;
    insgesameGeld = Number(rechnung.value) * 1.1;
    jedeGeld = insgesameGeld / peopleNum;

    thinkGeldText.textContent = `Das Thinkgeld ist: ${thinkGeld}`;
    insgesameGeldText.textContent = `Die Gesammtsumme beträgt: ${insgesameGeld}`;
    jedeGeldText.textContent = `Der Preis pro Person ist: ${jedeGeld}`;
  }

  if (serviceQulity.value === "gut") {
    thinkGeld = Number(rechnung.value) * 0.2;
    insgesameGeld = Number(rechnung.value) * 1.2;
    jedeGeld = insgesameGeld / peopleNum;

    thinkGeldText.textContent = `Das Thinkgeld ist: ${thinkGeld}`;
    insgesameGeldText.textContent = `Die Gesammtsumme beträgt: ${insgesameGeld}`;
    jedeGeldText.textContent = `Der Preis pro Person ist: ${jedeGeld}`;
  }
}
