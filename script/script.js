const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

setInterval(() => {
  hours.innerHTML =
    (new Date().getHours() < 10 ? "0" : "") + new Date().getHours() + ":";
  minutes.innerHTML =
    (new Date().getMinutes() < 10 ? "0" : "") + new Date().getMinutes() + ":";
  seconds.innerHTML =
    (new Date().getSeconds() < 10 ? "0" : "") + new Date().getSeconds();
}, 1000);
