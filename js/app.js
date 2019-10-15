'use strict';

// Global Variables
var userScore = 0;
var computerScore = 0;
var rock = document.getElementById();
var paper = document.getElementById();
var scissors = document.getElementById();
var lizard = document.getElementById();
var spock = document.getElementById();
var bottomChat = document.getElementById();


//Preload High Score Array
var highScoreArray = [['Mark', 7],['David', 2],['Sally', 17]];

//Preload Smack Talk Array
// https://www.rappad.co/insult-generator

var smackTalkArr = [
  'YOU\'RE AS USELESS AS A PHONE WITH 1% REMAINING BATTERY LIFE.',
  'YOU COULDN\'T POUR WATER OUT OF A BOOT IF THE INSTRUCTIONS WERE ON THE HEEL.',
  'ARE YOU ALWAYS AN IDIOT, OR JUST WHEN I\'M AROUND?',
  ' YO MAMA IS SO STUPID THAT SHE THINKS TIGER WOODS IS A FOREST.',
  'YO MAMA\'S SO SKINNY, SHE CAN GRATE CHEESE ON HER RIBS',
  'YO MAMA IS SO SHORT THAT SHE CAN LIMBO UNDER THE DOOR.',
  'Pompous Blossum',
  'Insecure Waffle',
  'Tattletale',
  'Ear banger',
  'Cheeseparer',
  'Quakebuttock',
  'Bumblepuppist',
  'Pricklouse',
  'EXCELLENT TIME TO BECOME A MISSING PERSON.',
  'YOU\'RE SO DUMB, YOUR DOG TEACHES YOU TRICKS.',
  'WHY DON\'T YOU SLIP INTO SOMETHING MORE COMFORTABLE -- LIKE A COMA.',
  'SOME PEOPLE ARE HAS-BEENS. YOU ARE A NEVER-WAS.',
  'IN THE LAND OF THE WITLESS, THE HALF-WIT IS KING.',
  'I CERTAINLY HOPE YOU ARE STERILE.',
  'YOU\'RE AS USELESS AS AN ASHTRAY ON A BIKE.',
  'DON\'T YOU LOVE NATURE, DESPITE WHAT IT DID TO YOU?',
  'SOME DRINK FROM THE FOUNTAIN OF KNOWLEDGE; YOU ONLY GARGLED.',
  'YOU MAKE ME BELIEVE IN REINCARNATION. NOBODY CAN BE AS STUPID AS YOU IN ONE LIFETIME.',
  'I WOULD HAVE LIKED TO INSULT YOU, BUT WITH YOUR INTELLIGENCE YOU WOULDN\'T GET OFFENDED.',
  'YOU SHOULD TOSS OUT MORE OF YOUR FUNNY REMARKS; THAT\'S ALL THEY\'RE GOOD FOR.',
  'I\'VE BEEN CALLED WORSE THINGS BY BETTER PEOPLE',
  'KEEP TALKING, SOMEDAY YOU\'LL SAY SOMETHING INTELLIGENT!'
];


//Create Constructor Function
var allPlayers = [];

var CreatePlayer = function(userName){
  this.userName = userName;
  allPlayers.push(this);
};

console.log(allPlayers);
function submitForm(e){
  e.preventDefault();
  var name = e.target.name.value;
  var user = new CreatePlayer(name);
}

var form = document.getElementById('enterarcade');
form.addEventListener('submit', submitForm);
console.log(allPlayers);

function computerChoice() {
  var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  var randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
}

var playGame = function(userChoice) {
  var computerChoice = computerChoice();
  // Checks for draw
  if (userChoice === computerChoice) {
    bottomChat.textContent = 'Draw';
  }

  // Checks for rock
  // Want to add to Display actual reason over why you win or lose e.g. Spock Vaporizes Rock
  if (userChoice === 'rock'){
    if (computerChoice === 'scissors') {
      bottomChat.textContent = 'User Wins';
    } else if (computerChoice === 'lizard') {
      bottomChat.textContent = 'User Wins';
    } else if (computerChoice === 'paper') {
      bottomChat.textContent = 'Computer Wins';
    } else if (computerChoice === 'spock') {
      bottomChat.textContent = 'Computer Wins';
    }
  }
};
