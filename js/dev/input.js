document.querySelectorAll(".password__eye").forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.previousElementSibling;
    const isPassword = input.getAttribute("type") === "password";
    input.setAttribute("type", isPassword ? "text" : "password");
    button.classList.toggle("active", isPassword);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".plsdata__input").forEach((input) => {
    const content = input.closest(".plsdata").querySelector(".plsdata__content");
    input.addEventListener("focus", () => {
      content.classList.add("disable");
    });
    input.addEventListener("blur", () => {
      if (input.value.trim() === "") {
        content.classList.remove("disable");
      }
    });
    input.addEventListener("input", () => {
      if (input.value.trim() !== "") {
        content.classList.add("disable");
      } else {
        content.classList.remove("disable");
      }
    });
  });
});
