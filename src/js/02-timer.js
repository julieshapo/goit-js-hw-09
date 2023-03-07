import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const refs = {
    input: document.querySelector('#datetime-picker'),
    button: document.querySelector('#timer-button'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
}

let startTime = 0;
let intervalId = null;

refs.button.disabled = false;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  
  
  onClose(selectedDates) {
    //   console.log(selectedDates[0].getTime());
    if (selectedDates[0] < Date.now()) {
               
        clearInterval(intervalId);
        console.log( refs.button.disabled)
        //   window.alert("Please choose a date in the future");
        Notiflix.Notify.failure("Please choose a date in the future");
      return;
      };
     
      startTime = selectedDates[0].getTime();
     
  },
};

flatpickr("#datetime-picker", options);


refs.button.disabled = true;
refs.button.addEventListener('click', onBtnClick)

const timer = {
    start() {
                
        intervalId = setInterval(() => {
            const currentTime = Date.now();
            // console.log(currentTime);

            const deltaTime = startTime - currentTime;
            // console.log(deltaTime)

            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            console.log({ days, hours, minutes, seconds });
          
          render({ days, hours, minutes, seconds });
          
          if (deltaTime <= 1000) {
            this.stop();
          }
                                 
         }, 1000);
  },

  stop() {
          refs.button.disabled = true;
          clearInterval(intervalId);
          return;
        },

}


function onBtnClick() {
    if (intervalId)
    return;

  timer.start();
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.padStart(2, '0');
}

function render({ days, hours, minutes, seconds }) {
refs.days.textContent = addLeadingZero(`${days}`);
refs.hours.textContent = addLeadingZero(`${hours}`);
refs.minutes.textContent = addLeadingZero(`${minutes}`);
refs.seconds.textContent = addLeadingZero(`${seconds}`);

}




// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(224140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}



// _________________________________ANOTHER EXAMPLE___________________________


// // Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
    
//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);

