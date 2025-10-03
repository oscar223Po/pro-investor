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
