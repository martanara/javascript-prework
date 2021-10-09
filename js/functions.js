
const printMessage = function(msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

const clearMessages = function() {
    document.getElementById('messages').innerHTML = '';
}

const printResult = function(result){
    const div = document.createElement('div');
    div.innerHTML = result;
    document.getElementById('result').appendChild(div);
}

const clearResult = function() {
    document.getElementById('result').innerHTML = '';
}

const getMoveName = function(argMoveId) {
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

const gameResult = function(argComputerMove, argPlayerMove) {
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    return 'won';
    } else if (argComputerMove == argPlayerMove) {
    return 'remis';
    } else {
    return 'lost';
    }
}

const displayResult = function(argComputerMove, argPlayerMove, argResult) {
    console.log('Moves: komputer: '+ argComputerMove + ' gracz: ' + argPlayerMove)
    console.log(gameResult(argComputerMove, argPlayerMove))
    printMessage('Komputer wylosował: ' + argComputerMove + ', gracz wybrał: ' + argPlayerMove);

    if( argResult == 'won'){
        printMessage('Wygrywasz!');
    } else if (argResult == 'lost') {
        printMessage('Przegrywasz :(')
    } else {
        printMessage('Remis')
    }
}

