function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printResult(result){
	let div = document.createElement('div');
	div.innerHTML = result;
	document.getElementById('result').appendChild(div);
}

function clearResult(){
	document.getElementById('result').innerHTML = '';
}

function getMoveName(argMoveId){
    if(argMoveId == 1){
    return 'papier';
    } else if (argMoveId == 2) {
    return 'kamień';
    } else if (argMoveId == 3) {
    return 'nożyce';
    }
  
    printMessage('Nie znam ruchu o id: ' + argMoveId + '.');
    return 'nieznany ruch';
}

function gameResult(argComputerMove, argPlayerMove){
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    return 'won';
    } else if (argComputerMove == argPlayerMove) {
    return 'remis';
    } else {
    return 'lost';
    }
}

function displayResult(argComputerMove, argPlayerMove, argResult){
	console.log('Moves: ', argComputerMove, argPlayerMove)
    printMessage('Komputer wylosował: ' + argComputerMove + ', gracz wybrał: ' + argPlayerMove);
  
    if( argResult == 'won'){
        printMessage('Wygrywasz!');
    } else if (argResult == 'lost') {
        printMessage('Przegrywasz :(')
    } else {
        printMessage('Remis')
    }
}
