const daily = document.querySelector("#daily-btn");
const weekly = document.querySelector("#weekly-btn");
const monthly = document.querySelector("#monthly-btn");

const hours = document.querySelectorAll(".hours");
const lastTime = document.querySelectorAll(".last-hour");

function dailyData() {
  fetch(
    "https://raw.githubusercontent.com/christopherjael/time-tracking-dashboard--solution/master/data.json"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.daily.current + "hrs";
        lastTime[i].innerHTML =
          "Last Daily - " + data[i].timeframes.daily.previous + "hrs";
      });
    });
}

function weeklyData() {
  fetch(
    "https://raw.githubusercontent.com/christopherjael/time-tracking-dashboard--solution/master/data.json"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.weekly.current + "hrs";
        lastTime[i].innerHTML =
          "Last Daily - " + data[i].timeframes.weekly.previous + "hrs";
      });
    });
}
function monthlyData() {
  fetch(
    "https://raw.githubusercontent.com/christopherjael/time-tracking-dashboard--solution/master/data.json"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      hours.forEach((e, i) => {
        hours[i].innerHTML = data[i].timeframes.monthly.current + "hrs";
        lastTime[i].innerHTML =
          "Last Daily - " + data[i].timeframes.monthly.previous + "hrs";
      });
    });
}

daily.addEventListener("click", () => {
  daily.className += " active";
  weekly.className = "swap-time";
  monthly.className = "swap-time";
  dailyData();
});
weekly.addEventListener("click", () => {
  weekly.className += " active";
  daily.className = "swap-time";
  monthly.className = "swap-time";
  weeklyData();
});
monthly.addEventListener("click", () => {
  monthly.className += " active";
  daily.className = "swap-time";
  weekly.className = "swap-time";
  monthlyData();
});
