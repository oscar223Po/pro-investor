import "./app.min.js";
import "./select.min.js";
import "./input.min.js";
import "./form.min.js";
/* empty css           */
import "./filter.min.js";
import "./aside.min.js";
import "./functions.min.js";
document.addEventListener("DOMContentLoaded", () => {
  const toggleWrapper = document.querySelector(".add__toggle");
  const toggle = toggleWrapper.querySelector(".add__switch");
  const inputs = document.querySelectorAll(".add__inputs .add__input");
  toggleWrapper.addEventListener("click", () => {
    toggle.classList.toggle("active");
    inputs.forEach((input) => {
      if (toggle.classList.contains("active")) {
        input.classList.remove("input--disable");
      } else if (input.placeholder === "Название банка" || input.placeholder === "ИНН" || input.placeholder === "КПП" || input.placeholder === "Корп. счет банка") {
        input.classList.add("input--disable");
      }
    });
  });
});
