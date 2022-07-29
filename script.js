/*
Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
*/

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
    alert(msg);
    return randomNumber;
}

/*
Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
You want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:
*/

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
    } else {
        result = "Computer wins!";
    }
    return result;
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection.toLowerCase(), computerSelection));