let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = '';

if(randomNumber == 1){
    computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'nożyce';
} else {
    computerMove = 'papier';
}

console.log('Komputer wylosował: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = '';

if(playerInput == '1'){
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3'){
    playerMove = 'nożyce';
} else {
    playerMove = 'niepoprawny ruch';
}

printMessage('Twój ruch to: ' + playerMove);
printMessage('Przeciwnik wybrał: ' + computerMove);

if(computerMove == 'kamień' && playerMove == 'papier' || computerMove == 'papier' && playerMove == 'nożyce' || computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else if (computerMove == 'kamień' && playerMove == 'kamień' || computerMove == 'papier' && playerMove == 'papier' || computerMove == 'nożyce' && playerMove == 'nożyce') {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz!');      
  }