import Notiflix from 'notiflix';
const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  const elements = e.target.elements;
  const amount = elements.amount.value;
  const delay = Number(elements.delay.value);
  const step = Number(elements.step.value);
  let delayStepCounter = 0;
  let promisePosition = 0;

  for (let i = 0; i < amount; i += 1) {
    promisePosition += 1;

    delayStepCounter = delay + step * i;

    createPromise(promisePosition, delayStepCounter)
      .then(successMessage => {
        Notiflix.Notify.success(successMessage);
      })
      .catch(rejectMessage => {
        Notiflix.Notify.failure(rejectMessage);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve(`✅ Fulfill promise ${position} in ${delay}`);
      } else {
        reject(`❌Reject promise ${position} in ${delay}`);
      }
      //promiseCounter = 0;
    }, delay);
  });
}