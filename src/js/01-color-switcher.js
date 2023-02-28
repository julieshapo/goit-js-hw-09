const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}
const PROMPT_DELAY = 1000;
let intervalId = null;


refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
    
    refs.body.style.backgroundColor = getRandomHexColor();

    refs.startBtn.setAttribute('disabled', '');
    refs.stopBtn.removeAttribute('disabled');
    
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
        console.log("start")
    }, PROMPT_DELAY);

    if (intervalId) return;
      
    
}

function onStopBtnClick() {
    console.log('stop')

    clearInterval(intervalId);
    refs.stopBtn.setAttribute('disabled', '');
    refs.startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
} 