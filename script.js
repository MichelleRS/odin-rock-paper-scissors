let playerScore = 0;
let computerScore = 0;

// randomly return computer choice of "rock", "paper", or "scissors"
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    msg = "";

    if (randomNumber === 0) {
        msg = "rock";
    } else if (randomNumber === 1) {
        msg = "paper";
    } else if (randomNumber === 2) {
        msg = "scissors";
    } else {
        msg = "Error! Please try again.";
    }
    alert("Computer chose " + msg);
    return randomNumber;
}


// add player prompt
let playerSelection = prompt("Choose rock, paper, or scissors.");
playerSelection = playerSelection.toLowerCase();



// play single round and return winner
function playRound(playerSelection, computerSelection) {
    result = "";

    if ((playerSelection === "rock" && computerSelection === 0) ||
        (playerSelection === "paper" && computerSelection === 1) ||
        (playerSelection === "scissors" && computerSelection === 2)) {
        result = "It's a tie!";
    } else if ((playerSelection === "rock" && computerSelection === 2) ||
        (playerSelection === "paper" && computerSelection === 0) ||
        (playerSelection === "scissors" && computerSelection === 1)) {
        result = "You win!";
        playerScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }
    alert(result);
    return result;
}

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log("Player score: " + playerScore);
console.log("Computer score: " + computerScore);