// const progressBars = Array.from(document.querySelectorAll('progress-bar'));

// setInterval(() => {
//   const rand = (max) => Math.floor(Math.random() * Math.floor(max));
//   progressBars[rand(progressBars.length)].setValue(rand(101));
// }, 1000);

const progressBar = document.querySelector('progress-bar');
let value = 0;

const timer = setInterval(() => {
  progressBar.setValue(++value);
  if (value >= 100) {
    console.info('stopping timer');
    stop();
  }
}, 100);

function stop() {
  clearInterval(timer);
}
