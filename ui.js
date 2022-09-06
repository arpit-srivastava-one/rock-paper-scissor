const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("click", e => {
        card.classList.remove("card");
        card.classList.add("card-selected");
    });
});
