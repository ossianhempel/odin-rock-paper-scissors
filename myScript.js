function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice
}



function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper, or scissors?")
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    //case insensitive
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "paper" && computerSelection == "rock") {
        return(`You Win! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        return(`You Win! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        return(`You Win! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        return(`You Lose! ${computerSelection} beats ${playerSelection}`)
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        return(`You Lose! ${computerSelection} beats ${playerSelection}`)
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        return(`You Lose! ${computerSelection} beats ${playerSelection}`)
    } else {
        return(`You both chose ${playerSelection}, it's a draw!`)
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    
    
    



    for (let i = 0; i < 5; i++){
        let result = (playRound(getPlayerChoice(), getComputerChoice()));
        console.log(result)
        if (result.includes("Win")) {
            playerScore ++;
        } else if (result.includes("Lose")) {
            computerScore ++;
        }
    }
    console.log(`Your score is ${playerScore} and the computer's score is ${computerScore}`);
    if (playerScore > computerScore) {
        console.log('That means, you won!');
    } else if (playerScore < computerScore) {
        console.log('Unfortunately, that means you have lost...versus a computer...');
    } else {
        console.log('That\'s a draw!')
    }
}

console.log(game());