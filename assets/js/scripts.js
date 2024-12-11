const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    location.href = "./product-details.html";
  });
});

const smallCards = document.querySelectorAll(".small-card");

smallCards.forEach((card) => {
  card.addEventListener("click", () => {
    location.href = "./category.html";
  });
});

const buyNowBtn = document.querySelector("#buy");

buyNowBtn.addEventListener("click", () => {
  location.href = "./checkout.html";
});
