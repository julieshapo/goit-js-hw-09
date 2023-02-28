import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.querySelector('#datetime-picker'),
    button: document.querySelector('#timer-button')
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);

  },
};

flatpickr("#datetime-picker", options);


let intervalId = null;


const timer = {
    start() {
        const startTime = Date.now();
        
        intervalId = setInterval(() => {
            const currentTime = Date.now();

            const deltaTime = currentTime - startTime;
            const timerComponents = convertMs(deltaTime);
            console.log(timerComponents);
            
         }, 1000);
    },
}

refs.button.addEventListener('click', onBtnClick)

function onBtnClick() {
    if (intervalId)
        return;

    timer.start();
}


function padTime(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = padTime(Math.floor(ms / day));
  // Remaining hours
  const hours = padTime(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = padTime(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = padTime(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}