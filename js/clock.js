const formatTime = (h, m, s) => {
    return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
};

function showClock() {
  
  let now = new Date();

  let utcHour = now.getUTCHours();
  let hour = (utcHour - 3 + 24) % 24;
  let minute = now.getUTCMinutes();
  let second = now.getUTCSeconds();

  let clock = formatTime(hour, minute, second);

  document.getElementById('time').textContent = clock;
  
  setTimeout(showClock,1000);
};
showClock();
