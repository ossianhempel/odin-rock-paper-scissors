const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomes = document.querySelector('.results');
const scoreboard = document.querySelector('.scoreboard');


let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice
}

function playRound(playerSelection, computerSelection) {
    


    // playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore ++;
        const p = document.createElement('p');
        p.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
        outcomes.appendChild(p);
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore ++; 
        const p = document.createElement('p');
        p.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
        outcomes.appendChild(p);
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore ++; 
        const p = document.createElement('p');
        p.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
        outcomes.appendChild(p);
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore ++; 
        const p = document.createElement('p');
        p.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
        outcomes.appendChild(p);
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore ++; 
        const p = document.createElement('p');
        p.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
        outcomes.appendChild(p);
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore ++; 
        const p = document.createElement('p');
        p.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
        outcomes.appendChild(p);
    } else {
        const p = document.createElement('p');
        p.textContent = `You both chose ${playerSelection}, it's a draw!`
        outcomes.appendChild(p);
    }
}

const checkForWinner = () => {
    if ((playerScore >= 5) || (computerScore >= 5)) {
        const finalResult = document.createElement('p');
        if (playerScore > computerScore) {
            finalResult.textContent = 'That means, you won!';
            scoreboard.append(finalResult);
        } else if (playerScore < computerScore) {
            finalResult.textContent = 'Unfortunately, that means you have lost...versus a computer...';
            scoreboard.append(finalResult);
        } else {
            finalResult.textContent = 'That\'s a draw!';
            scoreboard.append(finalResult);
        }
    }
}


rockButton.addEventListener('click', () => {
    const playerChoice = 'rock';
    playRound(playerChoice, getComputerChoice());
    scoreboard.textContent = `The score is ${playerScore} - ${computerScore}`;
    checkForWinner();
});


paperButton.addEventListener('click', () => {
    const playerChoice = 'paper';
    playRound(playerChoice, getComputerChoice());
    scoreboard.textContent = `The score is ${playerScore} - ${computerScore}`;
    checkForWinner();
});

scissorsButton.addEventListener('click', () => {
    const playerChoice = 'scissors';
    playRound(playerChoice, getComputerChoice());
    scoreboard.textContent = `The score is ${playerScore} - ${computerScore}`;
    checkForWinner();
});

