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
    console.log(rock.id)
    return rock.id;
});

paper.addEventListener('click', function () {
    console.log(paper.id);
    return paper.id;
});

scissors.addEventListener('click', function () {
    console.log(scissors.id);
    return scissors.id;
});


function playRound () {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'win';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return'loss';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'win';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'loss';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'win';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'loss';
    } else if (playerSelection === computerSelection) {
        return'draw';
    }
}

//console.log(playRound());