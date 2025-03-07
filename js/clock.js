const formatTime = (h, m, s) => {
    return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
};

function showClock() {
  
  let now = new Date();

  let offset = now.getTimezoneOffset() / 60;
  let hour = now.getHours() - offset;
  let minute = now.getMinutes();
  let second = now.getSeconds();

  let clock = formatTime(hour, minute, second);

  document.getElementById('time').textContent = clock;
  
  setTimeout(showClock(),1000);
};
showClock();
