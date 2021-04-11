$(document).ready(function() {
  $('#next').text('Starting player chosen at random!');
  $('button').text('Start');
  $('#start').click( function () {
    $('#start').addClass('reset');//Changes start button to reset play function
    $('button').text('Reset');
    computer();//Triggers random player function
    $('#next').text(playername + ' has been chosen to start');

      if( $('#player1').val() ) {//Changes default Player name to input value
           player1name = $('#player1').val();
      };
      if( $('#player2').val() ) {//Changes default Player name to input value
           player2name = $('#player2').val();
      };
    //Listens for click from current player
    $('.square').on('click', function () {
      //Checks if any win message is present, if so, appends next player
      if (winnerMessage == '') {
        $('#next').text('Next player turn - '+ nextPlayer);// If no win, message next player turn
      }
      //Checks if any win message is present, if so, ends the game
      if (winnerMessage !== '') {
        return; // Game over

      } else {
        if ($(this).hasClass('cross') || $(this).hasClass('naught')) {
          return;//Prevent taken position being re-clicked

        } else {
          let squareValue = $(this).attr('id');//Assigns clicked square ID variable
          square(player, squareValue);//Calls function in player.js to start sort of player inputs
          $('#winner').text(winnerMessage);//Receives a win message from winCompare()
          $(this).addClass(logo);//Adds 'O' or 'X' (via css :before) to the clicked square of current player
          turnSwap(player);//Calls function to swap to next player
          $('#player1Score').text(player1Score);//Scoreboard text
          $('#player2Score').text(player2Score);//Scoreboard text
        }
      }
    });

    $('.reset').click( function () {//Resets whole game except for scoreboard
      reset();
      $('#winner').text('');
      $('.square').removeClass('cross');
      $('.square').removeClass('naught');
      $('.reset').removeClass('start');
    });
  });
});
