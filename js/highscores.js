'use strict';

//Preload High Score Array
var highScoreArray = [{userName:'Mark', personalScore:7},{userName:'David', personalScore: 2},{userName:'Sally', personalScore: 17}];

function highScoreDOM(arr){
  var ol = document.getElementById('highscores');
  for (var i = 0; i < arr.length; i++){
    var li = document.createElement('li');
    li.textContent = `${arr[i].userName}:  ${arr[i].personalScore}`;
    ol.appendChild(li);
  }
}

// var retrieveLS = function(){
//   var retrievedData = localStorage.getItem('allPlayersLS');
//   var playerData = JSON.parse(retrievedData);

//   if(playerData !== null) {
//     CreatePlayer.allPlayers = playerData;
//   }
// };

// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value

function sortHighScores(arr){
  arr.sort(function(a,b){
    return b.personalScore-a.personalScore;
  });
}

sortHighScores(highScoreArray);
highScoreDOM(highScoreArray);


