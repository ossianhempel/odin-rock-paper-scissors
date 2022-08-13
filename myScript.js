function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// console.log(getComputerChoice())


function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper, or scissors?")
    return playerChoice;
}

// console.log(getPlayerChoice());

function playRound(playerSelection, computerSelection) {
    // $ make it case insensitive

    if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore ++; // this code repeats over and over -> turn into a separate function! (during refactoring)
        return(`You win! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore ++;
        return(`You win! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore ++;
        return(`You win! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore ++;
        return(`You Lose! ${computerSelection} beats ${playerSelection}`)
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore ++;
        return(`You Lose! ${computerSelection} beats ${playerSelection}`)
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore ++;
        return(`You Lose! ${computerSelection} beats ${playerSelection}`)
    } else {
        return(`You both chose ${playerSelection}, it's a draw!`)
    }
}


function game() {
    for (let i = 0; i < 5; i++){
        
    }

}



