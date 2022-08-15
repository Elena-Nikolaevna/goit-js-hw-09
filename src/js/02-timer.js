// Описан в документации
import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const button = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');
const timerDiv = document.querySelector('.timer');

button.disabled = true;
let userDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
      button.disabled = true;
    }
    if (selectedDates[0] >= options.defaultDate) {
      button.disabled = false;

    }
  },
};

button.addEventListener('click', onBtnClick);

function onBtnClick() {
  userDate = setInterval(() => {
    updateTime();
  }, 1000);
  input.disabled = true;
  button.disabled = true;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
function pad(value) {
  return String(value).padStart(2, 0);
}

function updateTime() {
  const currentTime = new Date();
  const selectedTime = new Date(input.value);
  const deltaTime = selectedTime - currentTime;
  if (deltaTime < 0) {
    timerDiv.innerHTML = 'Time over!';
    return;
  } else {
    const timeComponents = convertMs(deltaTime);
    seconds.textContent = timeComponents.seconds;
    minutes.textContent = timeComponents.minutes;
    hours.textContent = timeComponents.hours;
    days.textContent = timeComponents.days;
  }
}
flatpickr(input, options);
