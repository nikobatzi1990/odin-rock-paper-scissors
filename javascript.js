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

function playRound () {

    rock.addEventListener('click', function () {
        let playerSelection = rock.id;
        let computerSelection = getComputerChoice();
        console.log('player: ', playerSelection);
        console.log('comp: ', computerSelection);
        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            console.log ('win');
            return 'win';
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            console.log('loss');
            return 'loss';
        } else if (playerSelection === computerSelection) {
            console.log('draw');
            return 'draw';
        }
    });

    paper.addEventListener('click', function () {
        console.log(paper.id);
        let playerSelection = paper.id;
        let computerSelection = getComputerChoice();
        console.log('player: ', playerSelection);
        console.log('comp: ', computerSelection);
        if (playerSelection === 'paper' && computerSelection === 'rock') {
            console.log ('win');
            return 'win';
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            console.log('loss');
            return 'loss';
        } else if (playerSelection === computerSelection) {
            console.log('draw');
            return 'draw';
        }
    });

    scissors.addEventListener('click', function () {
        console.log(scissors.id);
        let playerSelection = scissors.id;
        let computerSelection = getComputerChoice();
        console.log('player: ', playerSelection);
        console.log('comp: ', computerSelection);
        if (playerSelection === 'scissors' && computerSelection === 'paper') {
            console.log ('win');
            return 'win';
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            console.log('loss');
            return 'loss';
        } else if (playerSelection === computerSelection) {
            console.log('draw');
            return 'draw';
        }
    });

}

console.log(playRound());