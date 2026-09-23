const techPanel = document.getElementById("tech-panel");
const categories = document.querySelectorAll(".tech-category");

let currentCategory = 0;
let intervalEvent;
let changing = false;

function changeCategory() {
    if (changing || categories.length < 2) {
        return;
    }

    changing = true;

    const current = categories[currentCategory];

    currentCategory++;

    if (currentCategory >= categories.length) {
        currentCategory = 0;
    }

    const next = categories[currentCategory];

    current.classList.remove("active");
    current.classList.add("leaving");

    next.style.display = "block";
    next.classList.add("entering");

    requestAnimationFrame(() => {
        next.classList.remove("entering");
        next.classList.add("active");
    });

    current.addEventListener("transitionend", function handler(event) {
        if (event.propertyName !== "opacity") {
            return;
        }

        current.classList.remove("leaving");
        current.style.display = "none";

        changing = false;

        current.removeEventListener("transitionend", handler);
    });
}

intervalEvent = setInterval(changeCategory, 3000);


function setCategoriesHeight() {
    let maxHeight = 0;

    categories.forEach(category => {
        const oldDisplay = category.style.display;
        const oldVisibility = category.style.visibility;

        category.style.display = "block";
        category.style.visibility = "hidden";

        maxHeight = Math.max(maxHeight, category.scrollHeight);

        category.style.display = oldDisplay;
        category.style.visibility = oldVisibility;
    });

    categories.forEach(category => {
        category.style.height = `${maxHeight}px`;
    });
}

setCategoriesHeight();