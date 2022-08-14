function playRound(playerChoice, computerChoice) {
    let result = 0;

    // 0 => Player wins
    // 1 => Computer wins
    // 2 => Draw

    if (playerChoice === "rock" && computerChoice === "rock") result = 2;
    else if (playerChoice === "paper" && computerChoice === "paper") result = 2;
    else if (playerChoice === "scissor" && computerChoice === "scissor") result = 2;
    else if (playerChoice === "rock" && computerChoice === "scissor") result = 0;
    else if (playerChoice === "paper" && computerChoice === "rock") result = 0;
    else if (playerChoice === "scissor" && computerChoice === "paper") result = 0;
    else if (playerChoice === "rock" && computerChoice === "paper") result = 1;
    else if (playerChoice === "paper" && computerChoice === "scissor") result = 1;
    else if (playerChoice === "scissor" && computerChoice === "rock") result = 1;

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