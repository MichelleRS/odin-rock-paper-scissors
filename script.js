/*
Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
*/

getComputerChoice();

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


