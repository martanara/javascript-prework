{
    let computerWins = 0;
    let playerWins = 0;

    const playGame = function (arg) {
        clearMessages()
        clearResult()
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        const computerMove = getMoveName(randomNumber);
        const playerInput = arg;
        const playerMove = getMoveName(playerInput);
        const result = gameResult(computerMove, playerMove);

        if (result == 'won'){
          playerWins++;
        } else if (result == 'lost'){
          computerWins++;
        }
        
        /*

        if (result == 'lost' && playerWins / (computerWins + playerWins)  < 0.76){
          console.log('over 75%');
          computerMove = playerMove;
          result = 'remis';
        } else if (result == 'won'){
          playerWins++;
        } else if (result == 'lost'){
          computerWins++;
        }

        */

        displayResult(computerMove, playerMove, result);
        printResult('Komputer: ' + computerWins + ' vs ' + 'Gracz: ' + playerWins)
    }

    document.getElementById('play-paper').addEventListener('click', function(){
        playGame(1);
      });

    document.getElementById('play-rock').addEventListener('click', function(){
        playGame(2);
      });

    document.getElementById('play-scissors').addEventListener('click', function(){
        playGame(3);
      });

    /*

    // Test win rate

    for( let i = 0; i < 100; i++ ){
        playGame(Math.floor(Math.random() * 3 + 1));
    }
    
    */

}
