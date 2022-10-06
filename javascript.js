function getComputerChoice() {
    let random = Math.floor(Math.random() * 3 + 1);
    //console.log(random);
    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "paper";
    } else if (random === 3) {
        return "scissors";
    }
}

function getPlayerSelection() {
    let choice = '';
    let buttons = document.getElementsByClassName('button');
    //console.log(buttons);
    for(i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        //console.log(button);
        
        button.addEventListener('click', () => {
            choice = button.id;
            //console.log(choice);
        });
    }
    return choice;
}

console.log(getPlayerSelection());

function playRound () {
    let playerSelection = getPlayerSelection();
    let result;
    let computerSelection = getComputerChoice();
    

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = 'win';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        result = 'loss';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result = 'win';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        result = 'loss';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result = 'win';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        result = 'loss';
    } else if (playerSelection === computerSelection) {
        result = 'draw';
    }
    console.log('computer: ', computerSelection);
    console.log('player', playerSelection);
    return result;
}

console.log(playRound());