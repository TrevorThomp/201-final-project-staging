'use strict';

// Global Variables
var userScore = 0;
var computerScore = 0;
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var lizard = document.getElementById('lizard');
var spock = document.getElementById('spock');
// var bottomChat = document.getElementById();


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

function computerChoice() {
  var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  var randomNumber = Math.floor(Math.random() * 5);
  return choices[randomNumber];
};

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

var playerChoiceImgEl = document.getElementById('player-choice'); // empty image holder

rock.addEventListener('click', handleClickOnImg);
paper.addEventListener('click', handleClickOnImg);
scissors.addEventListener('click', handleClickOnImg);
lizard.addEventListener('click', handleClickOnImg);
spock.addEventListener('click', handleClickOnImg);

function handleClickOnImg(event) {
  var choice = event.target.id;
  if(choice === 'rock') {
    playerChoiceImgEl.src = '../img/glowrock.svg';
    // rockTimesPicked++ if we do distribution stretch goal
  } else if(choice === 'paper') {
    playerChoiceImgEl.src = '../img/glowpaper.svg';
    // paperTimesPicked++ if we do distribution stretch goal
  } else if(choice === 'scissors') {
    playerChoiceImgEl.src = '../img/glowscissors.svg';
    // scissorsTimesPicked++ if we do distribution stretch goal
  } else if(choice === 'lizard') {
    playerChoiceImgEl.src = '../img/glowlizard.svg';
    // lizardTimesPicked++ if we do distribution stretch goal
  } else if(choice === 'spock') {
    playerChoiceImgEl.src = '../img/glowspock.svg';
    // spockTimesPicked++ if we do distribution stretch goal
  }
}


// var handleClickOnImg = function(event){
//   var ul = document.getElementById('ul-voteresults');
//   if(totalClicks > rounds - 2) {
//     imgDivTag.removeEventListener('click', handleClickOnImg);
//   }
//   if(totalClicks < rounds) {
//     var imageClicked = event.target;
//     var id = imageClicked.id;
//     if(id === 'img01' || id === 'img02' || id === 'img03'){
//       if (id === 'img01'){
//         img01OnThePage.clicks ++;
//       }
//       if (id === 'img02'){
//         img02OnThePage.clicks ++;
//       }
//       if (id === 'img03'){
//         img03OnThePage.clicks ++;
//       }
//       img01OnThePage.timesShown ++;
//       img02OnThePage.timesShown ++;
//       img03OnThePage.timesShown ++;
//       pickNewImages();
//     }
//   }
//   updateLocalStorage();
//   totalClicks ++;
//   if(totalClicks === rounds) {
//     for (var i = 0; i < ProductImage.allImages.length; i++) {
//       var liData = document.createElement('li');
//       liData.setAttribute('class', 'li-results');
//       liData.textContent = `${ProductImage.allImages[i].name}: Appearances ${ProductImage.allImages[i].timesShown} | Clicks ${ProductImage.allImages[i].clicks}`;
//       ul.appendChild(liData);
//     }
//     alert('Thank you for participating!');
//     makeChart();
//     localStorage.clear(); // Credit: Travis Skyles
//   }
// };