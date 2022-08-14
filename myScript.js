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
        //playerScore ++; // this code repeats over and over -> turn into a separate function! (during refactoring)
        return(`You Win! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        //playerScore ++;
        return(`You Win! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        //playerScore ++;
        return(`You Win! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        //computerScore ++;
        return(`You Lose! ${computerSelection} beats ${playerSelection}`)
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        //computerScore ++;
        return(`You Lose! ${computerSelection} beats ${playerSelection}`)
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        //computerScore ++;
        return(`You Lose! ${computerSelection} beats ${playerSelection}`)
    } else {
        return(`You both chose ${playerSelection}, it's a draw!`)
    }
}

function scoreCard(playRound) {

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

    console.log(playerScore);
    console.log(computerScore);

    


}


//console.log(playRound("rOCk", "scissors"))
console.log(game());