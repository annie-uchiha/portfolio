const btnNav - document.querySelector(".btn-nav");

const list = document.querySelector("ul");

btn-nav.addEventListener("click", () => {
    list.classList.toggle("ul");
})