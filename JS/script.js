const btnNav - document.querySelector(".btn-nav");

const list = document.querySelector("ul");

btnNav.addEventListener("click", () => {
    list.classList.toggle("active");
})