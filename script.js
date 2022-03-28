let time;
let minute;
let hours;
let days;
let timer;
time = minute = hours = days = '00';
function timerStart() {
  clearInterval(timer);
  timer = setInterval(() => {
    time *= 1;
    time++;
    if (time >= 60) {
      time = 0;
      minute *= 1;
      minute++;
      if (minute < 10) minute = '0' + minute;
      if (minute >= 60) {
        minute = 0;
        hours *= 1;
        hours++;
        if (hours < 10) hours = '0' + hours;
        if (hours >= 24) {
          hours = 0;
          days++;
        }
      }
    }
    if (time < 10) time = '0' + time;
    document.getElementById('timer').innerHTML = time;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('days').innerHTML = days;
  }, 1000);
}
function timerStop() {
  clearInterval(timer);
}
function timerClear() {
  clearInterval(timer);
  time = minute = hours = days = '00';
  document.getElementById('timer').innerHTML =
  document.getElementById('minute').innerHTML =
  document.getElementById('hours').innerHTML =
  document.getElementById('days').innerHTML =
  '00';
}


