### Collaborators

An 80's style space-themed arcade game. The game is rock-paper-scissors-lizard-Spock popularized by The Big Bang Theory TV show (the original game rules were created by Sam Kass and Karen Bryla samkass.com/theories/RPSSL.html). Site includes a player name prompt overlay, game page, instructions page, high score page, and about page.

We had a ton of fun creating this app and hope you enjoy it!

- Holly Davis
- Mark Swearingen
- Trevor Thompson

##### Domain Model

Single object player with userName as string and personalScore() as method.  Stretch goal would add the allChoicesArr array which would contain each player selection of rock, paper, scissors, Vulcan or lizard.
Player - object
  username - string
  personalScore() - method
  allChoicesArr - array

The Global variables include:
  smackTalk - array 
  choices - array of rock, paper, scissors, Vulcan and lizard strings.
  prevHighScores - array of arrays containing userName and score.  Stretch would include difficulty level.
  currentScore() - function
  highScore() - function
  computerChoice() - function for random selection of rock, paper, scissors, Vulcan or lizard.
  userChoice() - function to populate stretch goal of populating allChoicesArr.
