let playerScore = 0;
let computerScore = 0;

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let playerDisplay = document.getElementById('player');
let computerDisplay = document.getElementById('computer');
let youChose = document.getElementById('player-choice');
let compChose = document.getElementById('comp-choice');

// Game result pop-ups

let winPopup = document.createElement('div');
winPopup.classList.add('popup');
winPopup.innerText = 'You win!';

let losePopup = document.createElement('div');
losePopup.classList.add('popup');
losePopup.innerText = 'You lose!'

// Game Functions

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

function playRound() {

    let computerSelection = getComputerChoice();

    youChose.innerText = `Player Choice : ${playerSelection}`;
    compChose.innerText = `Computer Choice : ${computerSelection}`;

    if (playerSelection === computerSelection) {
        console.log('draw');

    } else if (playerSelection === 'rock') {

        if (computerSelection === 'scissors') {
            playerScore += 1;
            playerDisplay.innerText = `Player Score - ${playerScore}`;
                    
        } else if (computerSelection === 'paper') {
            computerScore += 1;
            computerDisplay.innerText = `Computer Score - ${computerScore}`;
                    
        }
        
    } else if (playerSelection === 'paper') {

        if (computerSelection === 'rock') {
            playerScore += 1;
            playerDisplay.innerText = `Player Score - ${playerScore}`;

        } else if (computerSelection === 'scissors') {
            computerScore += 1;
            computerDisplay.innerText = `Computer Score - ${computerScore}`;

        }

    } else if (playerSelection === 'scissors') {

        if (computerSelection === 'paper') {
            playerScore += 1;
            playerDisplay.innerText = `Player Score - ${playerScore}`;
                
        } else if (computerSelection === 'rock') {
            computerScore += 1;
            computerDisplay.innerText = `Computer Score - ${computerScore}`;
        }
    }
}

// Events

rock.addEventListener('click', function () {
    if (playerScore < 5 && computerScore < 5) {
        playerSelection = 'rock';
        playRound();
    } else if (playerScore === 5) {
        document.body.appendChild(winPopup);
    } else if (computerScore === 5) {
        document.body.appendChild(losePopup);
    }
});

paper.addEventListener('click', function () {
    if (playerScore < 5 && computerScore < 5) {
        playerSelection = 'paper';
        playRound();  
    } else if (playerScore === 5) {
        document.body.appendChild(winPopup);
    } else if (computerScore === 5) {
        document.body.appendChild(losePopup);
    }
});

scissors.addEventListener('click', function () {
    if (playerScore < 5 && computerScore < 5) {
        playerSelection = 'scissors';
        playRound();
    } else if (playerScore === 5) {
        document.body.appendChild(winPopup);
    } else if (computerScore === 5) {
        document.body.appendChild(losePopup);
    }
});

