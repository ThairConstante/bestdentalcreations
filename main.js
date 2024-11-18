document.querySelectorAll(".menu .ul_links .il_links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu_cocacola").checked = false;
  });
});

const animatedTexts = document.querySelectorAll('.text-animation');

const handleScroll = () => {
  animatedTexts.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    // Si el elemento está visible en el viewport
    if (elementTop < viewportHeight - 100) {
      element.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', handleScroll);

handleScroll();








