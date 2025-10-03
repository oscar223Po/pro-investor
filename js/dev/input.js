const pwdEyeButtons = document.querySelectorAll(".pwd__eye");
if (pwdEyeButtons !== null) {
  pwdEyeButtons.forEach((button) => {
    const input = button.previousElementSibling;
    if (!input || input.tagName !== "INPUT") return;
    button.addEventListener("click", () => {
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      button.classList.toggle("active", isPassword);
    });
  });
}
const plsDataInputs = document.querySelectorAll(".plsdata__input");
if (plsDataInputs !== null) {
  plsDataInputs.forEach((input) => {
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
}
