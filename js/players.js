
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


let player1 =[];
let player2 =[];
let winnerMessage = '';
let logo = 'red'
let player = 0

const turnSwap = function(nextPlayer) {
  if ( player === 1 ) {
    logo = 'red';
    player = 0;
  } else {
    logo = 'blue';
    player = 1;
  }
return player;
};

const square = function(player, value) {

  if (player === 1) {
    player1.push(value);
    //console.log(player1);
  } else {
    player2.push(value);
  }

  winCombo = Object.values(win);
  for ( let i = 0; i < winCombo.length; i++) {
  const winner = winCombo[i];
  compare(player1, winner);
  compare(player2, winner);

  if (compare(player1.sort(), winner.sort())) {
    return winnerMessage = ('Player 1 wins!') ;
  } else if (compare(player2.sort(), winner.sort())) {
    return winnerMessage = ('Player 2 wins!') ;
  } else if ((player1.length > 4)  || (player2.length > 4))  {
    return winnerMessage = ('DRAW');
    break;
  };
}
};

const compare = function(a, b) {

  return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);

return compare;
};
