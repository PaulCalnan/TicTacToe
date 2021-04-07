

$(document).ready(function() {



  $('.square').on('click', function () {
    if ($('div').parent(logo)) {
    $(this).off('click')
    };
  let squareChoice = $(this).attr('id');
  $(this).addClass(logo);

  $('#winner').text(winnerMessage);



  turnSwap(player);
  square(player, squareChoice);
  });
});
