
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

    if(intervalId) return;
    
    intervalId = setInterval(() => {
        console.log('color')
        refs.body.style.backgroundColor = getRandomHexColor()
    }, PROMPT_DELAY);
            
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
} 

function onStopBtnClick() {
    clearInterval(intervalId);
    intervalId = 0;
}
