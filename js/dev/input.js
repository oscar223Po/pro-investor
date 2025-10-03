document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".passcode__eye").forEach((button) => {
    const input = button.previousElementSibling;
    if (!input || input.tagName !== "INPUT") return;
    button.addEventListener("click", () => {
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      button.classList.toggle("active", isPassword);
    });
  });
  document.querySelectorAll(".plsdata__input").forEach((input) => {
    const wrapper = input.closest(".plsdata");
    if (!wrapper) return;
    const content = wrapper.querySelector(".plsdata__content");
    if (!content) return;
    const toggleState = () => {
      content.classList.toggle("disable", input.value.trim() !== "");
    };
    input.addEventListener("focus", () => {
      content.classList.add("disable");
    });
    input.addEventListener("blur", toggleState);
    input.addEventListener("input", toggleState);
    toggleState();
  });
});
