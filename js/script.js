let computerWins = 0;
let playerWins = 0;

function playGame(arg){
    clearMessages()
    clearResult()
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    let playerInput = arg;
    let playerMove = getMoveName(playerInput);
    let result = gameResult(computerMove, playerMove);
    displayResult(computerMove, playerMove, result);
    
    if (result == 'won'){
      playerWins++;
    } else if (result == 'lost'){
      computerWins++;
    }

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

  Dlaczego ten kod wywołuje się sam po odświezeniu strony, bez kliknięcia?
  document.getElementById('play-paper').addEventListener('click', playGame(1)); 

  */