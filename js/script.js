function playGame(arg){
    clearMessages()
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    let playerInput = arg;
    let playerMove = getMoveName(playerInput);
    displayResult(computerMove, playerMove)
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