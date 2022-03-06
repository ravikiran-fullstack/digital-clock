console.log("Digital Clock");

// date logic

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");
const day = document.getElementById("day");

date.textContent = new Date().getDate();
month.textContent = new Date().getMonth();
year.textContent = new Date().getFullYear();
day.textContent = days[new Date().getDay()];
// time logic
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
hour.textContent = new Date().getHours();
minute.textContent = new Date().getMinutes();
setInterval(() => {
  second.textContent = new Date().getSeconds();
  second.textContent =
    second.textContent.length === 1
      ? "0" + second.textContent
      : second.textContent;

  minute.textContent = formatTime(new Date().getMinutes());
  hour.textContent = formatTime(new Date().getHours());
}, 1000);

const formatTime = (str) => {
  console.log(str);
  str = str.length === 1 ? "0" + str : str;
  return str;
};
