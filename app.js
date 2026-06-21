
const bars = document.querySelectorAll(".bar div");

bars.forEach((bar) => {
  const width = bar.getAttribute("data-width");

  setTimeout(() => {
    bar.style.width = width;
  }, 300);
});