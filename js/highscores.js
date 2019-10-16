'use strict';

//Preload High Score Array
var highScoreArray = [{userName:'Mark', personalScore:7},{userName:'David', personalScore: 2},{userName:'Sally', personalScore: 17}];

//Function to retrieve data from local storage
// Trevor moved to this file so we are able to pull data from LS to highscores.html
var retrieveLS = function(){
  var retrievedData = localStorage.getItem('allPlayersLS');
  playerData = JSON.parse(retrievedData);

  if(userData !== null) {
    CreatePlayer.allPlayers = userData;
  }
};

function highScoreDOM(arr){
  var ol = document.getElementById('highscores');
  for (var i = 0; i < arr.length; i++){
    var li = document.createElement('li');
    li.textContent = `${arr[i].userName}:  ${arr[i].personalScore}`;
    ol.appendChild(li);
  }
}

// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value

function sortHighScores(arr){
  arr.sort(function(a,b){
    return b.personalScore-a.personalScore;
  });
}

sortHighScores(highScoreArray);
highScoreDOM(highScoreArray);


