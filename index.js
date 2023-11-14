//Steven Sy
$(document).ready(function() {
    //for random number sa dice
    function rollDice() {
      return Math.floor(Math.random() * 6) + 1;
    }
  
    //for setting yung random number sa corresponding image niya
    function updateDiceImage(player, diceValue) {
      $(`.img${player}`).attr('src', `images/dice${diceValue}.png`);
    }
  

    function determineWinner() {
      const player1Dice = rollDice();
      const player2Dice = rollDice();
  
      updateDiceImage(1, player1Dice);
      updateDiceImage(2, player2Dice);
  
      if (player1Dice > player2Dice) {
        $('h1').text('Player 1 Wins!');
      } else if (player2Dice > player1Dice) {
        $('h1').text('Player 2 Wins!');
      } else {
        $('h1').text('It\'s a Draw!');
      }
    }
  
   
    determineWinner();
      
  });
  