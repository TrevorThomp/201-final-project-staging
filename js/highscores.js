'use strict';

//Preload High Score Array
var highScoreArray = [{userName:'Mark', personalScore:50},{userName:'David', personalScore: 10},{userName:'Sally', personalScore: 25},{userName:'Sally', personalScore: 30},{userName:'Sally', personalScore: 40}];

// Append array to html
function highScoreDOM(arr){
  var ol = document.getElementById('highscores');
  for (var i = 0; i < arr.length; i++){
    var li = document.createElement('li');
    li.setAttribute('class', 'high-scores');
    li.textContent = `${arr[i].userName}:  ${arr[i].personalScore}`;
    ol.appendChild(li);
  }
}

// Sort through array from greatest personalScore to least
function sortHighScores(arr){
  arr.sort(function(a,b){
    return b.personalScore-a.personalScore;
  });
}

sortHighScores(highScoreArray);
highScoreDOM(highScoreArray);

// Parse through local storage for user data
var getScores = JSON.parse(localStorage.getItem('allUsers'));

sortHighScores(getScores);
highScoreDOM(getScores);
