function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    }
  
    printMessage('Nie znam ruchu o id: ' + argMoveId + '.');
    return 'nieznany ruch';
  }

function displayResult(argComputerMove, argPlayerMove){
	console.log('Moves: ', argComputerMove, argPlayerMove)
    printMessage('Komputer wylosował: ' + argComputerMove + ', gracz wybrał: ' + argPlayerMove);
  
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == argPlayerMove) {
        printMessage('Remis!')
    } else {
        printMessage('Tym razem przegrywasz :(');
    }
  }