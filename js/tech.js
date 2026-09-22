const techPanel = document.getElementById("tech-panel");
const categories = document.querySelectorAll(".tech-category");

let currentCategory = 0;

function changeCategory() {
    categories[currentCategory].classList.remove("active");

    currentCategory++;

    if (currentCategory >= categories.length) {
        currentCategory = 0;
    }

    categories[currentCategory].classList.add("active");
}
var intervalEvent = setInterval(changeCategory, 3000);
function changeCategoryIntervalOff() {
    changeCategory();
    clearInterval(intervalEvent);
}
techPanel.addEventListener("click", changeCategoryIntervalOff);
