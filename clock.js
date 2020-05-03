const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let indicator = "";
  if (hours > 12) {
    hours = hours - 12;
    indicator = "pm";
  } else {
    indicator = "am";
  }
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds} ${indicator}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
