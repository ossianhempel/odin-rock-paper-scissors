const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomes = document.querySelector('.results');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice
}

// function getPlayerChoice() {
//     let playerChoice = prompt("Rock, paper, or scissors?")
//     return playerChoice;
// }

function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore ++;
        // return(`You Win! ${playerSelection} beats ${computerSelection}`)
        const p = document.createElement('p');
        p.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
        outcomes.appendChild(p);
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore ++; 
        // return(`You Win! ${playerSelection} beats ${computerSelection}`)
        const p = document.createElement('p');
        p.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
        outcomes.appendChild(p);
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore ++; 
        // return(`You Win! ${playerSelection} beats ${computerSelection}`)
        const p = document.createElement('p');
        p.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
        outcomes.appendChild(p);
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore ++; 
        // return(`You Lose! ${computerSelection} beats ${playerSelection}`)
        const p = document.createElement('p');
        p.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
        outcomes.appendChild(p);
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore ++; 
        // return(`You Lose! ${computerSelection} beats ${playerSelection}`)
        const p = document.createElement('p');
        p.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
        outcomes.appendChild(p);
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore ++; 
        // return(`You Lose! ${computerSelection} beats ${playerSelection}`)
        const p = document.createElement('p');
        p.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
        outcomes.appendChild(p);
    } else {
        // return(`You both chose ${playerSelection}, it's a draw!`)
        const p = document.createElement('p');
        p.textContent = `You both chose ${playerSelection}, it's a draw!`
        outcomes.appendChild(p);
    }
}


rockButton.addEventListener('click', () => {
    // const computerSelection = getComputerChoice();
    const playerChoice = 'rock';
    playRound(playerChoice, getComputerChoice());
});

paperButton.addEventListener('click', () => {
    // const computerSelection = getComputerChoice();
    const playerChoice = 'paper';
    playRound(playerChoice, getComputerChoice());
});

scissorsButton.addEventListener('click', () => {
    // const computerSelection = getComputerChoice();
    const playerChoice = 'scissors';
    playRound(playerChoice, getComputerChoice());
});


function game() {

    // for(let i = 0; i < 5; i++) {
    //     console.log(playRound(getPlayerChoice(), getComputerChoice()));
    // }
    
    console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}`);
    if (playerScore > computerScore) {
        return 'That means, you won!'
    } else if (playerScore < computerScore) {
        return 'Unfortunately, that means you have lost...versus a computer...'
    } else {
        return 'That\'s a draw!'
    }
}


// console.log(game());