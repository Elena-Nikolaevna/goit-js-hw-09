const TIME_SHOW = 1000;
const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.body,
};

let interval = null;

refs.start.addEventListener('click', () => {
  console.log('start');

  randomColors(refs.body);
  refs.start.disabled = true;
  interval = setInterval(() => {
    randomColors(refs.body);
  }, TIME_SHOW);
});

refs.stop.addEventListener('click', () => {
  console.log('stop');
  refs.start.disabled = false;
  clearInterval(interval);
});

function randomColors(e) {
  e.style.backgroundColor = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
