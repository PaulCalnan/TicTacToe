


$(document).ready(function(e) {
  //Listens for click from current player
  //Also checks if any win message is present, if so, ends the game
  $('.square').on('click', function () {
    if (winnerMessage !== '') {
      return; // Game over
    } else { // If no win, message next player turn
      if ($(this).hasClass('cross') || $(this).hasClass('naught')) {
        console.log('HASCLASS');
        return;

      } else {
        $('#next').text('Next player turn - '+ nextPlayer);

        // if ($('div').parent(logo)) {
          //Checks if a css class applied via click

          // $(this).off('click');//if so, disables ability to reclick that square
        turnSwap(player);//Calls function to swap to next player
        // };//($(event.target).()

        // if ($(this).text() === '' ) {
        let squareValue = $(this).attr('id');//assigns clicked square ID variable
        $(this).addClass(logo);//Adds 'O' or 'X' to the clicked square for current player
        square(player, squareValue);//calls function in player.js to start sort of player inputs
        $('#winner').text(winnerMessage);//receives a win message from player.js if win match
      }

    }

  });

  $('#reset').click( function () {//resets whole game at this time. local variables to follow soon.



    $('.square').removeClass('cross');
    $('.square').removeClass('naught');
    $('#next').empty();
    $('#winner').empty();
    //reset();
    location.reload();
  });
});


//Future reset and player scoring features WIP

// $('#player1Score').text(player1Score);
// $('#player2Score').text(player2Score);

// $('#reset').click( function () {
//   $(this).addClass('.square');
//   $('.square').removeClass('not-clickable');
//   $('.square').removeClass('cross');
//   $('.square').removeClass('naught');
//   $('#next').empty();
//   $('#winner').empty();
//   reset();


// <!-- <span id="player">Player 1</span>
//       <span id="player1Score"></span> -->

// <!-- <span id="player2Score"></span>
//       <span id="player">Player 2</span> -->




// const reset = function() {
//   draw = [];
//   player1 = [];
//   player2 = [];
//   winnerMessage = '';
