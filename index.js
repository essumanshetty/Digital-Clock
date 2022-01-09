setInterval(() => {
  // Target the elements
  let hourSpan = document.getElementById("hour");
  let minuteSpan = document.getElementById("minutes");
  let secondsSpan = document.getElementById("seconds");
  let pmOrAmSpan = document.getElementById("pm");

  // Get the Current date
  var date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // Hour hand can go from 0 to 23 hours

  // Modify Hour to 12hour format
  if (hour > 12) {
    hour = hour - 12;
    // Make hour in two digits
    if (hour < 10) {
      hour = "0" + hour;
    }

    pmOrAmSpan.innerHTML = "PM";
  } else if (hour == 0) {
    hour = 12;
    pmOrAmSpan.innerHTML = "AM";
  } else {
    if (hour < 10) {
      hour = "0" + hour;
    }
    pmOrAmSpan.innerHTML = "AM";
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  // Assign the values
  hourSpan.innerHTML = hour;
  minuteSpan.innerHTML = minutes;
  secondsSpan.innerHTML = seconds;
}, 1000);
