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


    rock.addEventListener('click', function () {
        let playerSelection = rock.id;
        let computerSelection = getComputerChoice();
        console.log('player: ', playerSelection);
        console.log('comp: ', computerSelection);

        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore += 1;
            console.log('player: ', playerScore);
            console.log('computer: ', computerScore);
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore += 1;
            console.log('player: ', playerScore);
            console.log('computer: ', computerScore);
        } else if (playerSelection === computerSelection) {
            console.log('draw');
            console.log('player: ', playerScore);
            console.log('computer: ', computerScore);
        }
    });

    paper.addEventListener('click', function () {
        let playerSelection = paper.id;
        let computerSelection = getComputerChoice();

        console.log('player: ', playerSelection);
        console.log('comp: ', computerSelection);
        if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore += 1;
            console.log('player: ', playerScore);
            console.log('computer: ', computerScore);
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore += 1;
            console.log('player: ', playerScore);
            console.log('computer: ', computerScore);
        } else if (playerSelection === computerSelection) {
            console.log('draw');
            console.log('player: ', playerScore);
            console.log('computer: ', computerScore);
        }
    });

    scissors.addEventListener('click', function () {
        let playerSelection = scissors.id;
        let computerSelection = getComputerChoice();
        console.log('player: ', playerSelection);
        console.log('comp: ', computerSelection);

        if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore += 1;
            console.log('player: ', playerScore);
            console.log('computer: ', computerScore);
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore += 1;
            console.log('player: ', playerScore);
            console.log('computer: ', computerScore);
        } else if (playerSelection === computerSelection) {
            console.log('draw');
            console.log('player: ', playerScore);
            console.log('computer: ', computerScore);
        }
    });