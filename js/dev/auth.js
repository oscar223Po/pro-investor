document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".code__inputs input");
  inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      const value = e.target.value.replace(/\D/g, "");
      e.target.value = value;
      if (value) {
        e.target.classList.add("active");
        if (index < inputs.length - 1) {
          inputs[index + 1].disabled = false;
          inputs[index + 1].focus();
        }
      } else {
        e.target.classList.remove("active");
      }
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" || e.key === "Delete") {
        if (!input.value && index > 0) {
          inputs[index - 1].value = "";
          inputs[index - 1].classList.remove("active");
          inputs[index - 1].focus();
        }
      }
    });
    input.addEventListener("focus", () => {
      const firstEmpty = Array.from(inputs).find((inp) => !inp.value);
      if (firstEmpty && firstEmpty !== input) {
        firstEmpty.focus();
      }
    });
  });
});
