let playerScore = 0;
let computerScore = 0;

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

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let playerDisplay = document.getElementById('player');
let computerDisplay = document.getElementById('computer');

function playGame() {

    rock.addEventListener('click', function () {
        if (playerScore < 5 && computerScore < 5) {
            let playerSelection = rock.id;
            let computerSelection = getComputerChoice();

            if (computerSelection === 'scissors') {
                playerScore += 1;
                playerDisplay.innerText = `Player Score - ${playerScore}`;
                
            } else if (computerSelection === 'paper') {
                computerScore += 1;
                computerDisplay.innerText = `Computer Score - ${computerScore}`;
                
            } else if (playerSelection === computerSelection) {
                console.log('draw');
            }

        } else if (playerScore === 5) {
            alert('win');
        } else if (computerScore === 5) {
            alert('lose');
        }
    });

    paper.addEventListener('click', function () {
        if (playerScore < 5 && computerScore < 5) {
            let playerSelection = paper.id;
            let computerSelection = getComputerChoice();
        
            if (computerSelection === 'rock') {
                playerScore += 1;
                playerDisplay.innerText = `Player Score - ${playerScore}`;
            } else if (computerSelection === 'scissors') {
                computerScore += 1;
                computerDisplay.innerText = `Computer Score - ${computerScore}`;
            } else if (playerSelection === computerSelection) {
                console.log('draw');   
            }
        } else if (playerScore === 5) {
            alert('win');
        } else if (computerScore === 5) {
            alert('lose');
        }
    });

    scissors.addEventListener('click', function () {
        if (playerScore < 5 && computerScore < 5) {
            let playerSelection = scissors.id;
            let computerSelection = getComputerChoice();

            if (computerSelection === 'paper') {
                playerScore += 1;
                playerDisplay.innerText = `Player Score - ${playerScore}`;
            } else if (computerSelection === 'rock') {
                computerScore += 1;
                computerDisplay.innerText = `Computer Score - ${computerScore}`;
            } else if (playerSelection === computerSelection) {
                console.log('draw');
            }
        } else if (playerScore === 5) {
            alert('win');
        } else if (computerScore === 5) {
            alert('lose');
        }
    });
}

playGame();