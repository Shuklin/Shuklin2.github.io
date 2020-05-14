let url = 'http://51-zendev.gateway.lightwing.io/zenwork-login';
let timer = 1800;

showTimer(value) {
  let timerContainer = document.getElementById('timerContainer');
  timerContainer.innerHtml = value;
}

setInterval(()=>{
  console.log(url);
  if (timer > 0) {
    timer = timer - 1;
    showTimer(timer);
  } else {
    timer = 1800;
    showTimer(timer);
    window.open(url);
  }
}, 1000);

