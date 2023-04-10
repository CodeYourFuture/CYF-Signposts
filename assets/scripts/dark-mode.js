// toggles dark mode see colors.scss
const modeToggle = document.getElementById("mode-toggle");
const toggleMode = () => {
  document.body.classList.toggle("toggle-mode");
};

modeToggle.addEventListener("click", toggleMode);
