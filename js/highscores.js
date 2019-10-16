'use strict';

function highScoreDOM(){
  var ol = document.getElementById('highscores');
  for (var i = 0; i < highScoreArray.length; i++){
    var li = document.createElement('li');
    li.textContent = `${highScoreArray[i].userName}:  ${highScoreArray[i].highScore}`;
    ol.appendChild(li);
  }
}

// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value

function sortHighScores(){
  highScoreArray.sort(function(a,b){
    return b.highScore-a.highScore;
  });
}

sortHighScores();
highScoreDOM();

