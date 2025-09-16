import "./app.min.js";
function updatePadding() {
  const header = document.querySelector(".aside");
  const content = document.querySelector(".page");
  if (header && content) {
    if (window.innerWidth <= 767.98) {
      content.style.paddingBottom = `${header.offsetHeight}px`;
    } else {
      content.style.paddingBottom = "";
    }
  }
}
window.addEventListener("load", updatePadding);
window.addEventListener("resize", updatePadding);
