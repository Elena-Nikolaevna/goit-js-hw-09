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

button.classList.add('disabled');
let userDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      userDate = new Date();
    } else {
      button.disabled = false;
      button.classList.remove('disabled');
      userDate = selectedDates[0];
    }
  },
};

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

class Timer {
  constructor() {
    this.isActive = false;
    this.timer = null;
    button.disabled = true;
  }
  timerStart() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.timer = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = userDate - currentTime;
      const timeComponents = convertMs(deltaTime);
      seconds.textContent = timeComponents.seconds;
      minutes.textContent = timeComponents.minutes;
      hours.textContent = timeComponents.hours;
      days.textContent = timeComponents.days;
      if (deltaTime <= 0) {
        this.stop();
      }
    }, 1000);
  }
  timerStop() {
    clearInterval(this.timer);
  }
}
const timer = new Timer();
flatpickr(input, options);
button.addEventListener('click', () => timer.timerStart());
