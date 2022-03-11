const toggler = document.querySelector("#switch");
const annual = document.querySelectorAll(".annual");
const monthly = document.querySelectorAll(".monthly");
const container = document.querySelector(".container");
toggler.addEventListener("click", () => {
    container.classList.toggle("monthly", toggler.checked);
});