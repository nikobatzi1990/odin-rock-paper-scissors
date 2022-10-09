let playerScore = 0;
let computerScore = 0;

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let playerDisplay = document.getElementById('player');
let computerDisplay = document.getElementById('computer');

// Game result pop-ups

let winPopup = document.createElement('div');
winPopup.classList.add('popup');
winPopup.innerText = 'You win!';

let losePopup = document.createElement('div');
losePopup.classList.add('popup');
losePopup.innerText = 'You lose!'

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

// Functions

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
            document.body.appendChild(winPopup);
        } else if (computerScore === 5) {
            document.body.appendChild(losePopup);
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
            document.body.appendChild(winPopup);
        } else if (computerScore === 5) {
            document.body.appendChild(losePopup);
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
            document.body.appendChild(winPopup);
        } else if (computerScore === 5) {
            document.body.appendChild(losePopup);
        }
    });
}

playGame();