// ---------------------------------Initialize---------------------------------
const playerCards = document.querySelectorAll(".middle .left-section .card");

const footer = document.querySelector(".footer");
const footerText = document.querySelector(".footer h2");

const playerScoreDiv = document.querySelector("#player-score");
const computerScoreDiv = document.querySelector("#computer-score");

let pCard = null;
let cCard = null;

let playerChoice = "";
let computerChoice = "";

let playerScore = 0;
let computerScore = 0;

let i = 0;
let typeSpeed = 40;
let currentTimeout;
// ---------------------------------Initialize---------------------------------



// ---------------------------------Start---------------------------------
typeText(footerText, "Your turn...");

playerCards.forEach(card => {
    card.addEventListener("click", e => {
        pCard = card;
        processPlayerChoice();
    });
});
// ---------------------------------Start---------------------------------



// ---------------------------------Main Logic---------------------------------
function processPlayerChoice() {
    playerChoice = getChoice(pCard).toLowerCase();
    selectCard(pCard);    
    turnOffInteractionCards();
    processComputerChoice();
}


async function processComputerChoice() {
    typeText(footerText, "Computer's turn...");
    await new Promise(resolve => setTimeout(resolve, 2000));

    let randomIndex = Math.floor(Math.random() * 3);
    let options = document.querySelector(".middle .right-section .options");
    cCard = options.children[randomIndex].children[0];
    selectCard(cCard);

    computerChoice = getChoice(cCard).toLowerCase();

    showResult();
}


function processResult(playerChoice, computerChoice) {
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


function showResult() {
    // Get the result
    let result = processResult(playerChoice, computerChoice);

    // Increase score of either player or computer
    if (result === "You win!") {
        playerScore++;
        playerScoreDiv.textContent = playerScore;
    }
    else if (result === "You lose.") {
        computerScore++;
        computerScoreDiv.textContent = computerScore;
    }

    // Whether to start next round, or finish the game
    if (playerScore === 5) {
        typeText(footerText, "You won the game!");
        gameComplete();
    }
    else if (computerScore === 5) {
        typeText(footerText, "Game Over");
        gameComplete();
    }
    else {
        typeText(footerText, result);
        nextRound();
    }
}


async function nextRound() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    typeText(footerText, "Your turn...");

    deselectCard(pCard);
    deselectCard(cCard);

    turnOnInteractionCards();
}

async function gameComplete() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    typeText(footerText, "Your turn...");
    
    deselectCard(pCard);
    deselectCard(cCard);

    turnOnInteractionCards();

    playerScore = 0;
    computerScore = 0;
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
}
// ---------------------------------Main Logic---------------------------------



// ---------------------------------Type Writing Effect---------------------------------
// The following resource helped me - https://www.w3schools.com/howto/howto_js_typewriter.asp

function typeText(element, text) {
    i = 0;
    element.textContent = "";
    clearTimeout(currentTimeout);    
    addChar(element, text);
}

function addChar(element, text) {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      
      currentTimeout = setTimeout(addChar, typeSpeed, element, text);
    }
}
// ---------------------------------Type Writing Effect---------------------------------



// ---------------------------------Helper Methods---------------------------------
function getChoice(card) {
    for (let i = 0; i < card.childNodes.length; i++) {
        if (card.childNodes[i].className === "desc") {
            return card.childNodes[i].textContent;
        }
    }
}


function selectCard(card) {
    card.classList.remove("card");
    card.classList.add("card-selected");
}

function deselectCard(card) {
    card.classList.remove("card-selected");
    card.classList.add("card");
}


function turnOnInteractionCards() {
    playerCards.forEach(card => {
        card.style.pointerEvents = "auto";
    });
};

function turnOffInteractionCards() {
    playerCards.forEach(card => {
        card.style.pointerEvents = "none";
    });
};
// ---------------------------------Helper Methods---------------------------------