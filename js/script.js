function refreshPage(){
    window.location.reload();
} 

const toggler = document.querySelector("#switch");
const annual = document.querySelectorAll(".annual");
const monthly = document.querySelectorAll(".monthly");
window.onload = function priceChange(){
    if (toggler.checked === false) {
        monthly.forEach(hideMonthly);
        function hideMonthly(item) {
            item.style.display = "none";
        }
    } else if (toggler.checked === true ) {
        annual.forEach(hideAnnual);
        function hideAnnual(item) {
            item.style.display = "none";
        }
    }
}