// ---------------------------------Initialize---------------------------------
const playerCards = document.querySelectorAll(".middle .left-section .card");
const footer = document.querySelector(".footer");
const footerText = document.querySelector(".footer h2");

let pCard = null;
let cCard = null;

let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;

let i = 0;
let typeSpeed = 40;
let currentTimeout;

// ---------------------------------Start---------------------------------
typeText(footerText, "Your Turn");

// ---------------------------------Cards---------------------------------
playerCards.forEach(card => {
    card.addEventListener("click", e => {
        pCard = card;
        doPlayerChoice();
    });
});

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


function doPlayerChoice() {
    playerChoice = getChoice(pCard).toLowerCase();

    pCard.classList.remove("card");
    pCard.classList.add("card-selected");
    
    turnOffInteractionCards();

    doComputerChoice();
}


async function doComputerChoice() {
    typeText(footerText, "Computer's turn...");

    await new Promise(resolve => setTimeout(resolve, 2000));

    let randomIndex = Math.floor(Math.random() * 3);
    let options = document.querySelector(".middle .right-section .options");

    cCard = options.children[randomIndex].children[0];
    cCard.classList.remove("card");
    cCard.classList.add("card-selected");

    computerChoice = getChoice(cCard).toLowerCase();

    showResult();
}


function getChoice(card) {
    for (let i = 0; i < card.childNodes.length; i++) {
        if (card.childNodes[i].className === "desc") {
            return card.childNodes[i].textContent;
        }
    }
}


function showResult() {
    let result = playRound(playerChoice, computerChoice);

    if (result === "You win!") {
        playerScore++;

        const playerScoreDiv = document.querySelector(".player-score");
        playerScoreDiv.textContent = playerScore;
    }

    else if (result === "You lose.") {
        computerScore++;
        
        const computerScoreDiv = document.querySelector(".computer-score");
        computerScoreDiv.textContent = computerScore;
    }

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
    typeText(footerText, "Your Turn");

    pCard.classList.remove("card-selected");
    pCard.classList.add("card");
    cCard.classList.remove("card-selected");
    cCard.classList.add("card");

    turnOnInteractionCards();
}

async function gameComplete() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    typeText(footerText, "Your Turn");
    
    pCard.classList.remove("card-selected");
    pCard.classList.add("card");
    cCard.classList.remove("card-selected");
    cCard.classList.add("card");

    turnOnInteractionCards();

    playerScore = 0;
    computerScore = 0;
    document.querySelector(".player-score").textContent = playerScore;
    document.querySelector(".computer-score").textContent = computerScore;
}


// Helped me - https://www.w3schools.com/howto/howto_js_typewriter.asp
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