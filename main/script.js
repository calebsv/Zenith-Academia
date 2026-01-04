const button = document.getElementById("animatedButton");

button.addEventListener("click", function () {
  button.classList.add("button-clicked");

  setTimeout(function () {
    button.classList.remove("button-clicked");
  }, 200);
});

document.body.style.opacity = 0;
document.body.style.transition = "opacity 1s";

window.onload = () => {
  document.body.style.opacity = 1;
};
//Animação ao rolar a página
function animateOnScroll() {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((element) => {
    const position = element.getBoundingClientRect();

    if (position.top < window.innerHeight - 50) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", animateOnScroll);

// Run once on page load
animateOnScroll();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const emailInput = document.getElementById("emailInput");
