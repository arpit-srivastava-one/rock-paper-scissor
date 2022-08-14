function getPlayerChoice() {
    let action = prompt("Select your action!");
    action = action.toLocaleLowerCase();
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