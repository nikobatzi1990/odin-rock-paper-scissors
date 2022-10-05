console.log("Hello World!");

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

function playRound (playerSelection, computerSelection) {

    //playerSelection = prompt("Choose rock, paper, or scissors!");
    computerSelection = getComputerChoice();

    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock!"
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock!";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats Paper!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper!"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors!"
    } else return "It's a draw!";
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

console.log(game());