let is24Hour = true;

function updateClock() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let day = now.toLocaleString("default", { weekday: "long" });
  let date = now.toLocaleDateString();

  // 12-hour format
  let ampm = "";
  if (!is24Hour) {
    ampm = hours >= 12 ? " PM" : " AM";
    hours = hours % 12 || 12; // convert 0 to 12
  }

  // Format with leading zeros
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  document.getElementById("clock").textContent =
    `${hours}:${minutes}:${seconds}${ampm}`;
  document.getElementById("date").textContent = `${day}, ${date}`;
}

function toggleFormat() {
  is24Hour = !is24Hour;
  updateClock();
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();
