

$(document).ready(function() {
  //Listens for click from current player
  //Also checks if any win message is present, if so, ends the game
  $('.square').on('click', function () {
    if (winnerMessage !== '') {
      return; // Game over
    } else { // If no win, message next player turn
      $('#next').text('Next player turn - '+ nextPlayer);
    }
    if ($('div').parent(logo)) {//Checks if a css class applied via click
      $(this).off('click');//if so, disables ability to reclick that square
      turnSwap(player);//Calls function to swap to next player
    };

    let squareValue = $(this).attr('id');//assigns clicked square ID variable
      $(this).addClass(logo);//Adds 'O' or 'X' to the clicked square for current player
      square(player, squareValue);//calls function in player.js to start sort of player inputs
      $('#winner').text(winnerMessage);//receives a win message from player.js if win match
  });

  $('#reset').click( function () {//resets whole game at this time. local variables to follow soon.
    location.reload();
  });
});
