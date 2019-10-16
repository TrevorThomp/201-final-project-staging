'use strict';

//Preload High Score Array
var highScoreArray = [{userName:'Mark', personalScore:50},{userName:'David', personalScore: 10},{userName:'Sally', personalScore: 25},{userName:'Sally', personalScore: 30},{userName:'Sally', personalScore: 40},{userName:'Sally', personalScore: 55},{userName:'Sally', personalScore: 60},{userName:'Sally', personalScore: 70},{userName:'Sally', personalScore: 75}];


function highScoreDOM(arr){
  var ol = document.getElementById('highscores');
  for (var i = 0; i < arr.length; i++){
    var li = document.createElement('li');
    li.setAttribute('class', 'high-scores')
    li.textContent = `${arr[i].userName}:  ${arr[i].personalScore}`;
    ol.appendChild(li);
  }
}

var getScores = JSON.parse(localStorage.getItem('allUsers'));

// https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value

function sortHighScores(arr){
  arr.sort(function(a,b){
    return b.personalScore-a.personalScore;
  });
}

sortHighScores(highScoreArray);
highScoreDOM(highScoreArray);

sortHighScores(getScores);
highScoreDOM(getScores);

