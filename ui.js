// ---------------------------------Initialize---------------------------------
const playerCards = document.querySelectorAll(".middle .left-section .card");
const footer = document.querySelector(".footer");
const footerText = document.querySelector(".footer h2");


// ---------------------------------Start---------------------------------
footerText.textContent = "The first to score 5 points... wins the game!";
turnOffInteractionCards();

// ---------------------------------Cards---------------------------------
playerCards.forEach(card => {
    card.addEventListener("click", e => {
        card.classList.remove("card");
        card.classList.add("card-selected");

        turnOffInteractionCards();
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

// Cards - For debugging
window.addEventListener("keydown", e => {
    if (e.key === "R" || e.key === "r")
        turnOnInteractionCards();
});


// ---------------------------------Footer---------------------------------
footer.addEventListener("click", () => {
    footerText.textContent = "Your turn.";
    turnOnInteractionCards();
});