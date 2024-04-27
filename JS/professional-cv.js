document.addEventListener("DOMContentLoaded", function () {
  const icons = document.querySelectorAll(".skills-icons i");

  icons.forEach(function (icon, index) {
    if (index % 2 === 0) {
      icon.classList.add("fly-from-top");
    } else {
      icon.classList.add("fly-from-bottom");
    }
  });
});
