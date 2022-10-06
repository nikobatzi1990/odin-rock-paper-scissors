// code for getting computer's choice

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
            console.log(choice);
        });
    }
    return choice;
}

console.log(getPlayerSelection());

function playRound () {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerSelection();
}

playRound();