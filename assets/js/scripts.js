const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener('click', () => {
        location.href = "./product-details.html";
    });
});