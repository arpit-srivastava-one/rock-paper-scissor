const playerCards = document.querySelectorAll(".middle .left-section .card");

playerCards.forEach(card => {
    card.addEventListener("click", e => {
        card.classList.remove("card");
        card.classList.add("card-selected");

        turnOffInteractioncards();
    });
});

const turnOnInteractioncards = () => {
    playerCards.forEach(card => {
        card.style.pointerEvents = "auto";
    });
};

const turnOffInteractioncards = () => {
    playerCards.forEach(card => {
        card.style.pointerEvents = "none";
    });
};

// For debugging
window.addEventListener("keydown", e => {
    if (e.key === "R" || e.key === "r")
        turnOnInteractioncards();
});
