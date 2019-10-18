'use strict';

// Global Variables
var playerScore = 0;
var compScore = 0;
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var lizard = document.getElementById('lizard');
var spock = document.getElementById('spock');
var bottomChatHeader = document.getElementById('bottomChatHeader');
var bottomChatText = document.getElementById('bottomChatText');
var userName = document.getElementById('player-name');
var imageChoices = document.getElementById('ul-weapons');
var playerChoiceImgEl = document.getElementById('player-choice');
var computerChoiceImgEl = document.getElementById('computer-choice');
var user = null;

//Create Constructor Function
var CreatePlayer = function(userName){
  this.userName = userName;
  this.personalScore = 0;
  CreatePlayer.allPlayers.push(this);
  updateLS();
};
CreatePlayer.allPlayers = [];

//Function to store data in local storage
var updateLS = function(){
  var allPlayersData = JSON.stringify(CreatePlayer.allPlayers);
  localStorage.setItem('allUsers', allPlayersData);
};

// Function to retrieve data in local storage
var retrieveLS = function(){
  var retrievedData = localStorage.getItem('allUsers');
  var playerData = JSON.parse(retrievedData);
  if(playerData !== null) {
    CreatePlayer.allPlayers = playerData;
  }
};

// Instantiates new player upon form input and stores in local storage
function submitForm(e){
  e.preventDefault();
  var input = document.getElementById('player-name');
  var name = input.value;
  user = new CreatePlayer(name);
  updateLS();
  // Takes user's name and puts it on the left side of showdown area
  var userName = document.getElementById('playerName');
  if(name !== ''){
    userName.textContent = name;
  }
}
var form = document.getElementById('enterarcade');
form.addEventListener('submit', submitForm);

// Toggles display when user enters the arcade
var button = document.getElementById('enter-button');
var overlay = document.getElementById('overlay');
button.addEventListener('click', function() {
  overlay.style.display = 'none';
});

// Renders updated playScore & computerScore to page
var updateScore = function() {
  var userScore = document.getElementById('userScore');
  var computerScore = document.getElementById('computerScore');
  userScore.textContent = playerScore;
  computerScore.textContent = compScore;
};

// Function to allow user to play again if they choose
var playAgainModalDisplay = function() {
  var modal = document.getElementById('play-again-modal');
  var modalText = document.getElementById('modalText');
  imageChoices.style.display = 'none';
  modal.style.display = 'block';
  if(playerScore === 5) {
    modalText.textContent = `Congratulations ${userName.value}! You have won! Press Play Again if you would like to test your odds`;
  } else if (compScore === 5) {
    modalText.textContent = `Bummer ${userName.value}! You don't seem to have what it takes! You can try again if you think you're better than that`;
  }
};

// If user hits "play again" reset major game page
var playAgain = function() {
  var modal = document.getElementById('play-again-modal');
  var userScore = document.getElementById('userScore');
  var computerScore = document.getElementById('computerScore');
  userScore.textContent = 0;
  computerScore.textContent = 0;
  bottomChatHeader.textContent = '';
  bottomChatText.textContent = '';
  modal.style.display = 'none';
  imageChoices.style.display = 'block';
  playerChoiceImgEl.src = './img/blankchoice.png';
  computerChoiceImgEl.src = './img/blankchoice.png';
  playerScore = 0;
  compScore = 0;
};

var playAgainButton = document.getElementById('play-again-button');
playAgainButton.addEventListener('click', playAgain);

// Function that increments user personalScore if they win and displays modal
var winRound = function () {
  if (playerScore === 5) {
    user.personalScore += 10;
    updateLS();
    playAgainModalDisplay();
  } else if (compScore === 5) {
    playAgainModalDisplay();
  }
};

// Function to hold game conditionals
var playGame = function(e) {
  var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  var randomNumber = Math.floor(Math.random() * 5);
  var computerChoice = choices[randomNumber];
  var userChoice = e.target.id;
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
    } else if (computerChoice === 'spock') {
      bottomChatHeader.textContent = 'Spock vaporizes Rock';
      bottomChatText.textContent = 'Computer Wins';
      compScore++;
      updateScore();
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
    } else if (computerChoice === 'spock') {
      bottomChatHeader.textContent = 'Spock smashes Scissors';
      bottomChatText.textContent = 'Computer Wins';
      compScore++;
      updateScore();
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
      bottomChatHeader.textContent = 'Paper disproves Spock';
      bottomChatText.textContent = 'User Wins';
      playerScore++;
      updateScore();
    } else if (computerChoice === 'scissors') {
      bottomChatHeader.textContent = 'Scissors cuts Paper';
      bottomChatText.textContent = 'Computer Wins';
      compScore++;
      updateScore();
    } else if (computerChoice === 'lizard') {
      bottomChatHeader.textContent = 'Lizard eats Paper';
      bottomChatText.textContent = 'Computer Wins';
      compScore++;
      updateScore();
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
    } else if (computerChoice === 'rock') {
      bottomChatHeader.textContent = 'Rock crushes Lizard';
      bottomChatText.textContent = 'Computer Wins';
      compScore++;
      updateScore();
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
      bottomChatHeader.textContent = 'Paper disproves Spock';
      bottomChatText.textContent = 'Computer Wins';
      compScore++;
      updateScore();
    } else if (computerChoice === 'lizard') {
      bottomChatHeader.textContent = 'Lizard poisons Spock';
      bottomChatText.textContent = 'Computer Wins';
      compScore++;
      updateScore();
    }
  }
  // Dictates what image will display based on the computer's choice and assigns the img tag a new ID
  if(computerChoice === 'rock') {
    computerChoiceImgEl.src = '../img/glowrock.png';
  } else if(computerChoice === 'paper') {
    computerChoiceImgEl.src = '../img/glowpaper.png';
  } else if(computerChoice === 'scissors') {
    computerChoiceImgEl.src = '../img/glowscissors.png';
  } else if(computerChoice === 'lizard') {
    computerChoiceImgEl.src = '../img/glowlizard.png';
  } else if(computerChoice === 'spock') {
    computerChoiceImgEl.src = '../img/glowspock.png';
  }
  winRound();
};

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
    playerChoiceImgEl.src = '../img/glowrock.png';
    playerChoiceImgEl.id = 'rock-choice';
  } else if(choice === 'paper') {
    playerChoiceImgEl.src = '../img/glowpaper.png';
    playerChoiceImgEl.id = 'paper-choice';
  } else if(choice === 'scissors') {
    playerChoiceImgEl.src = '../img/glowscissors.png';
    playerChoiceImgEl.id = 'scissors-choice';
  } else if(choice === 'lizard') {
    playerChoiceImgEl.src = '../img/glowlizard.png';
    playerChoiceImgEl.id = 'lizard-choice';
  } else if(choice === 'spock') {
    playerChoiceImgEl.src = '../img/glowspock.png';
    playerChoiceImgEl.id = 'spock-choice';
  }
}

// Adjust audio volume
function audioVolume() {
  var audio = document.querySelector('audio');
  audio.volume = 0.1;
}

function audioDisplay() {
  var audio = document.querySelector('audio');
  var imagePlay = document.querySelector('.mute');

  imagePlay.addEventListener('click', function() {
    if (imagePlay.className === 'mute') {
      imagePlay.className = 'un-mute';
      audio.play();
      imagePlay.src = './img/sound.svg';
    } else {
      imagePlay.className = 'mute';
      audio.pause();
      imagePlay.src = './img/mute.svg';
    } 
  });
}

audioDisplay();
audioVolume();
retrieveLS();
