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

    let buttons = document.getElementsByClassName('button');
    //console.log(buttons);
    for(i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        //console.log(button);
        
        button.addEventListener('click', () => {
            let result;

            if (button.id === 'rock') {
                result = 'rock';
                //console.log(result);
            } else if (button.id === 'paper') {
                result = 'paper';
            } else if (button.id === 'scissors') {
                result = 'scissors';
            }
            return result;
        });
    }
}

console.log(getPlayerSelection());

// code for a single round of game

function playRound (playerSelection, computerSelection) {
    playerSelection = getPlayerSelection();
    computerSelection = getComputerChoice();

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win this round! Rock beats Scissors!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return "You lose this round! Paper beats Rock!"
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return "You win this round! Paper beats Rock!";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return "You lose this round! Scissors beats Paper!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return "You win this round! Scissors beats Paper!"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return "You lose this round! Rock beats Scissors!"
    } else return "It's a draw! No points!";
}

//console.log(playRound());

function game () {

    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 9; i++) {
        let result = playRound();
        console.log(result);
        
        if (result.includes("win")) {
            playerScore += 1;
            console.log("player score: ", playerScore);
            console.log("computer score: ", computerScore)
        
        } else if (result.includes("lose")) {
            computerScore += 1;
            console.log("player score: ", playerScore);
            console.log("computer score: ", computerScore)
        
        } else if (result.includes("draw")) {
            console.log("player score: ", playerScore);
            console.log("computer score: ", computerScore)
        }
    }

    if (playerScore > computerScore === true) {
        return "You win!"
    } else if (computerScore > playerScore === true) {
        return "You lose!"
    }
}

//console.log(game());