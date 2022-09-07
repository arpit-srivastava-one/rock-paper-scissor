const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", e => {
        card.classList.remove("card");
        card.classList.add("card-selected");

        turnOffInteractioncards();
    });
});

const turnOnInteractioncards = () => {
    cards.forEach(card => {
        card.style.pointerEvents = "auto";
    });
};

const turnOffInteractioncards = () => {
    cards.forEach(card => {
        card.style.pointerEvents = "none";
    });
};

// For debugging
window.addEventListener("keydown", e => {
    if (e.key === "R" || e.key === "r")
        turnOnInteractioncards();
});
