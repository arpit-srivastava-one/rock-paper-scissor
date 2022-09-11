function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);

        console.log(`Round ${i+1}: ${result}`);
    }
}


function playRound(playerChoice, computerChoice) {
    let result = "";

    if (playerChoice === "rock" && computerChoice === "rock") result = "Draw";
    else if (playerChoice === "paper" && computerChoice === "paper") result = "Draw";
    else if (playerChoice === "scissor" && computerChoice === "scissor") result = "Draw";
    else if (playerChoice === "rock" && computerChoice === "scissor") result = "You win!";
    else if (playerChoice === "paper" && computerChoice === "rock") result = "You win!";
    else if (playerChoice === "scissor" && computerChoice === "paper") result = "You win!";
    else if (playerChoice === "rock" && computerChoice === "paper") result = "You lose.";
    else if (playerChoice === "paper" && computerChoice === "scissor") result = "You lose.";
    else if (playerChoice === "scissor" && computerChoice === "rock") result = "You lose.";
    else result = "Invalid";

    return result;
}


function getPlayerChoice() {
    let action = prompt("Select your action!");
    action = action.toLocaleLowerCase();
    
    if (action !== "rock" && action !== "paper" && action !== "scissor")
        action = "invalid";

    return action;
}


function getComputerChoice() {
    let rnd = getRandomInteger(1, 4);
    let choice = "";

    switch (rnd) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissor";
            break;
        default:
            choice = "invalid";
    }

    return choice;
}


// The following page helped me get the solution - https://www.w3schools.com/js/js_random.asp
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}