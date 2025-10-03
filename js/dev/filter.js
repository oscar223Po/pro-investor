const links = document.querySelectorAll(".filter__link");
if (links !== null) {
  links.forEach((link) => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(".filter__link--active")?.classList.remove("filter__link--active");
      this.classList.add("filter__link--active");
    });
  });
}
