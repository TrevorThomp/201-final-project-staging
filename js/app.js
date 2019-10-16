'use strict';

// Global Variables
var playerScore = 0;
var compScore = 0;
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var lizard = document.getElementById('lizard');
var spock = document.getElementById('spock');
var user = null;

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

var smackTalkDisplay = function() {
  var textDisplay = document.getElementById('array-text');
  var randomNumber = Math.floor(Math.random() * smackTalkArr.length);
  textDisplay.textContent = smackTalkArr[randomNumber];
};

//Create Constructor Function
var CreatePlayer = function(userName){
  this.userName = userName;
  this.personalScore = 0;
  CreatePlayer.allPlayers.push(this);
};
CreatePlayer.allPlayers = [];

//Function to store data in local storage
var updateLS = function(){
  var allPlayersData = JSON.stringify(CreatePlayer.allPlayers);
  localStorage.setItem('allPlayersLS', allPlayersData);
};

function submitForm(e){
  e.preventDefault();
  var name = e.target.name.value;
  user = new CreatePlayer(name);
  updateLS();
}

var form = document.getElementById('enterarcade');
form.addEventListener('submit', submitForm);

var button = document.getElementById('enter-button');
var overlay = document.getElementById('overlay');
button.addEventListener('click', function() {
  overlay.style.display = 'none';
});

var updateScore = function() {
  var userScore = document.getElementById('userScore');
  var computerScore = document.getElementById('computerScore');
  userScore.textContent = playerScore;
  computerScore.textContent = compScore;
};

var winRound = function () {
  if (playerScore === 5) {
    user.personalScore += 10;
    updateLS();
    alert('You Won!');
  } else if (compScore === 5) {
    alert('You Lose!');
  }
};

var playGame = function(e) {
  var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  var randomNumber = Math.floor(Math.random() * 5);
  var computerChoice = choices[randomNumber];
  var userChoice = e.target.id;
  var bottomChatHeader = document.getElementById('bottomChatHeader');
  var bottomChatText = document.getElementById('bottomChatText');
  // Checks for draw
  if (userChoice === computerChoice) {
    bottomChatHeader.textContent = 'Draw';
    bottomChatText.textContent = `Your ${userChoice} has tied my ${computerChoice}`;
  }

  // Checks for rock
  if (userChoice === 'rock'){
    if (computerChoice === 'scissors') {
      bottomChatHeader.textContent = 'Rock crushes Scissors';
      bottomChatText.textContent = 'User Wins';
      playerScore++;
      updateScore();

    } else if (computerChoice === 'lizard') {
      bottomChatHeader.textContent = 'Rock crushes Lizard';
      bottomChatText.textContent = 'User Wins';
      playerScore++;
      updateScore();
    } else if (computerChoice === 'paper') {
      bottomChatHeader.textContent = 'Paper covers Rock';
      bottomChatText.textContent = 'Computer Wins';
      compScore++;
      updateScore();
      smackTalkDisplay();
    } else if (computerChoice === 'spock') {
      bottomChatHeader.textContent = 'Spock vaporizes Rock';
      bottomChatText.textContent = 'Computer Wins';
      compScore++;
      updateScore();
      smackTalkDisplay();
    }
  }

  // Checks for scissors
  if (userChoice === 'scissors'){
    if (computerChoice === 'paper') {
      bottomChatHeader.textContent = 'Scissors cuts Paper';
      bottomChatText.textContent = 'User Wins';
      playerScore++;
      updateScore();
    } else if (computerChoice === 'lizard') {
      bottomChatHeader.textContent = 'Scissors decapitates Lizard';
      bottomChatText.textContent = 'User Wins';
      playerScore++;
      updateScore();
    } else if (computerChoice === 'rock') {
      bottomChatHeader.textContent = 'Rock crushes Scissors';
      bottomChatText.textContent = 'Computer Wins';
      compScore++;
      updateScore();
      smackTalkDisplay();
    } else if (computerChoice === 'spock') {
      bottomChatHeader.textContent = 'Spock smashes Scissors';
      bottomChatText.textContent = 'Computer Wins';
      compScore++;
      updateScore();
      smackTalkDisplay();
    }
  }

  // Checks for paper
  if (userChoice === 'paper'){
    if (computerChoice === 'rock') {
      bottomChatHeader.textContent = 'Paper covers Rock';
      bottomChatText.textContent = 'User Wins';
      playerScore++;
      updateScore();
    } else if (computerChoice === 'spock') {
      bottomChatHeader.textContent = 'Paper disapproves Spock';
      bottomChatText.textContent = 'User Wins';
      playerScore++;
      updateScore();
    } else if (computerChoice === 'scissors') {
      bottomChatHeader.textContent = 'Scissors cuts Paper';
      bottomChatText.textContent = 'Computer Wins';
      compScore++;
      updateScore();
      smackTalkDisplay();
    } else if (computerChoice === 'lizard') {
      bottomChatHeader.textContent = 'Lizard eats Paper';
      bottomChatText.textContent = 'Computer Wins';
      compScore++;
      updateScore();
      smackTalkDisplay();
    }
  }

  // Checks for lizard
  if (userChoice === 'lizard'){
    if (computerChoice === 'spock') {
      bottomChatHeader.textContent = 'Lizard poisons Spock';
      bottomChatText.textContent = 'User Wins';
      playerScore++;
      updateScore();
    } else if (computerChoice === 'paper') {
      bottomChatHeader.textContent = 'Lizard eats Paper';
      bottomChatText.textContent = 'User Wins';
      playerScore++;
      updateScore();
    } else if (computerChoice === 'scissors') {
      bottomChatHeader.textContent = 'Scissors decapitates Lizard';
      bottomChatText.textContent = 'Computer Wins';
      compScore++;
      updateScore();
      smackTalkDisplay();
    } else if (computerChoice === 'rock') {
      bottomChatHeader.textContent = 'Rock crushes Lizard';
      bottomChatText.textContent = 'Computer Wins';
      compScore++;
      updateScore();
      smackTalkDisplay();
    }
  }

  // Checks for spock
  if (userChoice === 'spock'){
    if (computerChoice === 'scissors') {
      bottomChatHeader.textContent = 'Spock smashes Scissors';
      bottomChatText.textContent = 'User Wins';
      playerScore++;
      updateScore();
    } else if (computerChoice === 'rock') {
      bottomChatHeader.textContent = 'Spock vaporizes Rock';
      bottomChatText.textContent = 'User Wins';
      playerScore++;
      updateScore();
    } else if (computerChoice === 'paper') {
      bottomChatHeader.textContent = 'Paper disapproves Spock';
      bottomChatText.textContent = 'Computer Wins';
      compScore++;
      updateScore();
      smackTalkDisplay();
    } else if (computerChoice === 'lizard') {
      bottomChatHeader.textContent = 'Lizard poisons Spock';
      bottomChatText.textContent = 'Computer Wins';
      compScore++;
      updateScore();
      smackTalkDisplay();
    }
  }

  // Gets initally empty image that will get replaced by the computer's choice
  var computerChoiceImgEl = document.getElementById('computer-choice');
  // Dictates what image will display based on the computer's choice and assigns the img tag a new ID
  if(computerChoice === 'rock') {
    computerChoiceImgEl.src = '../img/glowrock.svg';
  } else if(computerChoice === 'paper') {
    computerChoiceImgEl.src = '../img/glowpaper.svg';
  } else if(computerChoice === 'scissors') {
    computerChoiceImgEl.src = '../img/glowscissors.svg';
  } else if(computerChoice === 'lizard') {
    computerChoiceImgEl.src = '../img/glowlizard.svg';
  } else if(computerChoice === 'spock') {
    computerChoiceImgEl.src = '../img/glowspock.svg';
  }
  winRound();
};

// Gets initally empty image that will get replaced by the user's choice
var playerChoiceImgEl = document.getElementById('player-choice');

// Adds listeners to each static image from index.html
rock.addEventListener('click', handleClickOnImg);
rock.addEventListener('click', playGame);

paper.addEventListener('click', handleClickOnImg);
paper.addEventListener('click', playGame);

scissors.addEventListener('click', handleClickOnImg);
scissors.addEventListener('click', playGame);

lizard.addEventListener('click', handleClickOnImg);
lizard.addEventListener('click', playGame);

spock.addEventListener('click', handleClickOnImg);
spock.addEventListener('click', playGame);

// Dictates what image will display based on the player's choice and assigns the img tag a new ID
function handleClickOnImg(event) {
  var choice = event.target.id;
  if(choice === 'rock') {
    playerChoiceImgEl.src = '../img/glowrock.svg';
    playerChoiceImgEl.id = 'rock-choice';
  } else if(choice === 'paper') {
    playerChoiceImgEl.src = '../img/glowpaper.svg';
    playerChoiceImgEl.id = 'paper-choice';
  } else if(choice === 'scissors') {
    playerChoiceImgEl.src = '../img/glowscissors.svg';
    playerChoiceImgEl.id = 'scissors-choice';
  } else if(choice === 'lizard') {
    playerChoiceImgEl.src = '../img/glowlizard.svg';
    playerChoiceImgEl.id = 'lizard-choice';
  } else if(choice === 'spock') {
    playerChoiceImgEl.src = '../img/glowspock.svg';
    playerChoiceImgEl.id = 'spock-choice';
  }
}

retrieveLS();
