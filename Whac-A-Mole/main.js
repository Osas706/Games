const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const start = document.querySelector('.start');

let result = 0;
let hitPostition ;
let currentTime = 60;
let timerId = null;

function randomSquare(){
  squares.forEach(square => {
    square.classList.remove('mole');
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  //console.log(randomPosition);

  randomSquare.classList.add('mole');

  hitPostition = randomSquare.id;
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if(square.id == hitPostition){
      result++;

      score.textContent = result;
      hitPostition = null;
    }
  })
})

function moveMole(){
 
  timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown(){
  currentTime--;

  timeLeft.textContent = currentTime;

  if(currentTime == 0){
    clearInterval(countDownTimerId);

    clearInterval(timerId);

    alert('GAMEOVER! Your final score is ' + result)
  }
};

let countDownTimerId = setInterval(countDown, 500);

start.addEventListener('click', ()=> {
  location.reload();
})