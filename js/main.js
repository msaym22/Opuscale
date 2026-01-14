document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.style.animation = "fadeIn 1s ease";
  });

  const form = document.querySelector("form");
  if(form){
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you! We'll contact you shortly.");
      form.reset();
    });
  }
});
