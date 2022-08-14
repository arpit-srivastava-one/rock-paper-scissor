function getPlayerChoice() {
    let action = prompt("Select your action!");
    action = action.toLocaleLowerCase();
    return action;
}