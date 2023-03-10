import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function createPromise(position, delay) {

  const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  return promise;
}

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(evt) {
  evt.preventDefault();
  
    console.log(evt.currentTarget.delay.value)
    console.log(evt.currentTarget.step.value)
    console.log(evt.currentTarget.amount.value)

    let firstDelay = Number(evt.currentTarget.delay.value);
    let delayStep = Number(evt.currentTarget.step.value);
    let amount = Number(evt.currentTarget.amount.value);
  

    for (let i = 0; i < amount; i += 1) {
      createPromise(1 + i, firstDelay + i * delayStep)
            .then(({ position, delay }) => {
                
                Notiflix.Notify.success(
                `✅ Fulfilled promise ${position} in ${delay}ms`
                );
            })
            .catch(({ position, delay }) => {
                
                Notiflix.Notify.failure(
                `❌ Rejected promise ${position} in ${delay}ms`
                );
            });
      
    }
    evt.currentTarget.reset();
}