let win = {
  'win1' : ['1', '2', '3'],
  'win2' : ['4', '5', '6'],
  'win3' : ['7', '8', '9'],
  'win4' : ['1', '4', '7'],
  'win5' : ['2', '5', '8'],
  'win6' : ['3', '6', '9'],
  'win7' : ['1', '5', '9'],
  'win8' : ['3', '5', '7'],
};
// Initialise all variables
let draw = [];
let player1 = [];
let player1Score = 0;
let player2Score = 0;
let player2 = [];
let winnerMessage = '';
let nextPlayer = 'O';
let logo = 'cross'
let player = 1

const turnSwap = function(currentPlayer) { //Function to swap current player to next
  if ( player === 1 ) {
    logo = 'cross';
    player = 0;
  } else {
    logo = 'naught';
    player = 1;
  }
  return player;
};
//square function receives the players square ID and pushes that ID into the players array
const square = function(player, squareValue) {
  draw.push(squareValue); //Pushes all square ID's into an array and calls a draw if the array length = 9 available squares
  if (draw.length === 9) {
    winnerMessage = ('DRAW!');
    $('#next').text('Click reset to start over');
  };
  if (player === 0) { //Pushes square value to array
    player1.push(squareValue);
    nextPlayer = ('X'); //jquery takes next player message
  } else {
    player2.push(squareValue);
    nextPlayer = ('O');
  };
  winCompare(player1, player2);  //Pass current arrays for comparison
};
//winCompare function takes in both players arrays for comparison
const winCompare = function(player1Array, player2Array) {
  winCombo = Object.values(win); //Iterate winning combination array object and assign each to a variable
  for ( let i = 0; i < winCombo.length; i++) {
    let winner = winCombo[i];
    const player1Wins = winner.every(val => player1Array.includes(val)); //Checks if entire player array has matching elements within win combinations
    const player2Wins = winner.every(val => player2Array.includes(val));

    if (player1Wins) {
      winnerMessage = ('Player 1 wins!');
      player1Score = player1Score + 1;
      $('#next').text('Click reset to start over');
    } else if (player2Wins) {
      winnerMessage = ('Player 2 wins!');
      player2Score = player2Score + 1;
      $('#next').text('Click reset to start over');
    }
  }
};
