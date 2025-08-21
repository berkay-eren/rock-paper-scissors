//console.log("Script loaded");

const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

//getComputerChoice();

function decideWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const winner = decideWinner(playerSelection, computerSelection);
    if (winner === "player") {
        playerScore++;
        return `${playerSelection} beats ${computerSelection}`;
    } else if (winner === "computer") {
        compScore++;
        return `${computerSelection} beats ${playerSelection}`;
    } else {
        return "It's a tie!";
    }
}


while( playerScore < 5 && compScore < 5 ) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Enter rock, paper, or scissors:").toLowerCase();
    
    console.log(playRound(playerSelection,computerSelection));
    console.log(`Score => Player: ${playerScore}, Computer: ${compScore}`);

    if (playerScore === 5) {
    console.log("🎉 Congratulations! You won the game!");
    } else if (compScore === 5) {
    console.log("💻 Game over! The computer won.");
    }
}