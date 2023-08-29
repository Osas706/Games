const cardArray = [
  {
    name: 'fires',
    img: './img/IMG_7034.JPG'
  },
  {
    name: 'cheeseburger',
    img: './img/IMG_7038.JPG'
  },
  {
    name: 'hotdog',
    img: './img/IMG_7039.JPG'
  },
  {
    name: 'ice cream',
    img: './img/IMG_7042.JPG'
  },
  {
    name: 'milkshake',
    img: './img/IMG_7043.JPG'
  },
  {
    name: 'pizza',
    img: './img/IMG_7034.JPG'
  },
  {
    name: 'fires',
    img: './img/IMG_7034.JPG'
  },
  {
    name: 'cheeseburger',
    img: './img/IMG_7038.JPG'
  },
  {
    name: 'hotdog',
    img: './img/IMG_7039.JPG'
  },
  {
    name: 'ice cream',
    img: './img/IMG_7042.JPG'
  },
  {
    name: 'milkshake',
    img: './img/IMG_7043.JPG'
  },
  {
    name: 'pizza',
    img: './img/IMG_7034.JPG'
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardChosen = [];
let cardChosenIds = [];
const cardsWon = [];
console.log(cardsWon);

function createBoard(){
  for (let i = 0; i < cardArray.length; i++){
    const card = document.createElement('img');
    card.setAttribute('src', 'img/black.JPG');
    card.setAttribute('data-id', i);

    card.addEventListener('click', flipCard)

    gridDisplay.append(card);
   
  }
}

createBoard();

function checkMatch(){
  const cards = document.querySelectorAll('img');
  const optionOneId = cardChosenIds[0];
  const optionTwoId = cardChosenIds[1];

  if(optionOneId == optionTwoId){
    cards[optionOneId].setAttribute('src', 'img/black.JPG');
    cards[optionTwoId].setAttribute('src', 'img/black.JPG');

    alert('You have clicked the same image!')
  }

 if(cardChosen[0] == cardChosen[1]){
  alert('found a match');

  cards[optionOneId].setAttribute('src', 'img/check.jpeg');
  cards[optionTwoId].setAttribute('src', 'img/check.jpeg');

  cards[optionOneId].removeEventListener('click', flipCard);
  cards[optionTwoId].removeEventListener('click', flipCard);

  cardsWon.push(cardChosen);
 }else{
  cards[optionOneId].setAttribute('src', 'img/black.JPG');
  cards[optionTwoId].setAttribute('src', 'img/black.JPG');

  alert('Sorry, Try again!')
 }
 console.log(cardChosen);
 console.log(cardChosenIds);
  
 resultDisplay.textContent = cardsWon.length;

 cardChosen = [];
 cardChosenIds = [];

 if(cardsWon.length == cardArray.length / 2){
   resultDisplay.textContent = 'Congratulations, You found them all!'
 }

}


function flipCard(){
 const cardId = this.getAttribute('data-id');
 console.log(cardId);

 cardArray[cardId].name;
  cardChosen.push(cardArray[cardId].name);
  cardChosenIds.push(cardId);
  console.log(cardChosen);

  this.setAttribute('src', cardArray[cardId].img);
  if(cardChosen.length === 2){
    setTimeout( checkMatch, 500)
  }
}