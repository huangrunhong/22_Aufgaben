const inputMon = document.getElementById("inputMon");
const infoShow = document.getElementById("infoShow");

const image = document.getElementById("image");
const headline = document.getElementById("headline");
const context = document.getElementById("context");

function info() {
  if (inputMon.value === "Jan") {
    infoShow.classList.add("stuctur");
    image.innerHTML =
      "<img src=https://www.horoscopedates.com/img/icon_aquarius.png>";
    console.log(image.innerHTML);
    headline.textContent = "AQUARIUS";
    console.log(headline.textContent);
    context.textContent =
      "Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…";
  }
  if (inputMon.value === "Feb") {
    infoShow.classList.add("stuctur");
    image.innerHTML =
      "<img src=https://www.horoscopedates.com/img/icon_pisces.png>";
    console.log(image.innerHTML);
    headline.textContent = "PISCES";
    console.log(headline.textContent);
    context.textContent =
      "Communication is very important today—written, spoken, and even nonverbal body language will all…";
  }
  if (inputMon.value === "Mar") {
    infoShow.classList.add("stuctur");
    image.innerHTML =
      "<img src=https://www.horoscopedates.com/img/icon_aries.png>";
    console.log(image.innerHTML);
    headline.textContent = "ARIES";
    console.log(headline.textContent);
    context.textContent =
      "Today your patience might be tested when one or more of your projects gets put on hold by someone… ";
  }
  if (inputMon.value === "Apr") {
    infoShow.classList.add("stuctur");
    image.innerHTML =
      "<img src=https://www.horoscopedates.com/img/icon_taurus.png>";
    console.log(image.innerHTML);
    headline.textContent = "TAURUS";
    console.log(headline.textContent);
    context.textContent =
      "Your intense energy makes you a great candidate for a leadership position right now, so if you are…";
  }
  if (inputMon.value === "May") {
    infoShow.classList.add("stuctur");
    image.innerHTML =
      "<img src=https://www.horoscopedates.com/img/icon_gemini.png>";
    console.log(image.innerHTML);
    headline.textContent = "GEMINI";
    console.log(headline.textContent);
    context.textContent =
      "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…";
  }
  if (inputMon.value === "Jun") {
    infoShow.classList.add("stuctur");
    image.innerHTML =
      "<img src=https://www.horoscopedates.com/img/icon_cancer.png>";
    console.log(image.innerHTML);
    headline.textContent = "CANCER";
    console.log(headline.textContent);
    context.textContent =
      "Too many different elements in your life are overlapping with each other right now—and it's your…";
  }
  if (inputMon.value === "Jul") {
    infoShow.classList.add("stuctur");
    image.innerHTML =
      "<img src=https://www.horoscopedates.com/img/icon_leo.png>";
    console.log(image.innerHTML);
    headline.textContent = "LEO";
    console.log(headline.textContent);
    context.textContent =
      "The issues you'll be dealing with today are very complicated ones—you will have to navigate your…";
  }
  if (inputMon.value === "Aug") {
    infoShow.classList.add("stuctur");
    image.innerHTML =
      "<img src=https://www.horoscopedates.com/img/icon_virgo.png>";
    console.log(image.innerHTML);
    headline.textContent = "VIRGO";
    console.log(headline.textContent);
    context.textContent =
      "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…";
  }
  if (inputMon.value === "Sep") {
    infoShow.classList.add("stuctur");
    image.innerHTML =
      "<img src=https://www.horoscopedates.com/img/icon_libra.png>";
    console.log(image.innerHTML);
    headline.textContent = "LIBRA";
    console.log(headline.textContent);
    context.textContent =
      "Pick a cultural event that's coming up and get some tickets for it today.";
  }
  if (inputMon.value === "Oct") {
    infoShow.classList.add("stuctur");
    image.innerHTML =
      "<img src=https://www.horoscopedates.com/img/icon_scorpio.png>";
    console.log(image.innerHTML);
    headline.textContent = "SCORPIO";
    console.log(headline.textContent);
    context.textContent =
      "Someone will challenge a belief that you've held for a very long time today—and they will say an…";
  }
  if (inputMon.value === "Nov") {
    infoShow.classList.add("stuctur");
    image.innerHTML =
      "<img src=https://www.horoscopedates.com/img/icon_sagittarius.png>";
    console.log(image.innerHTML);
    headline.textContent = "SAGITTARIUS";
    console.log(headline.textContent);
    context.textContent =
      "Someone in your life needs to step up and take on more responsibility—and you need to tell them to....";
  }
  if (inputMon.value === "Dec") {
    infoShow.classList.add("stuctur");
    image.innerHTML =
      "<img src=https://www.horoscopedates.com/img/icon_capricorn.png>";
    console.log(image.innerHTML);
    headline.textContent = "CAPRICORN";
    console.log(headline.textContent);
    context.textContent =
      "Breaking the rules is not always a bad thing—especially if the rules limit your creativity. ";
  }
}
