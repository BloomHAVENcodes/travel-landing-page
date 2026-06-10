const banner = document.querySelector(".banner");

const title = document.querySelector("#title");
const description = document.querySelector("#description");

// cards
const paris = document.querySelector("#egypt");
const greece = document.querySelector("#kenya");
const japan = document.querySelector("#Nigeria");
const nigeria = document.querySelector("#southafrica");

// all images inside cards
const images = document.querySelectorAll(".img-box img");


// ACTIVE IMAGE FUNCTION
function setActive(clickedImg){
    images.forEach(img => img.classList.remove("active"));
    clickedImg.classList.add("active");
}


// IMAGE CLICK (direct selection)
images.forEach(img => {
    img.addEventListener("click", () => {
        setActive(img);
    });
});


// PARIS
egypt.addEventListener("click", () => {

    setActive(egypt.querySelector("img"));

    banner.style.backgroundImage = "url('egypt5.jpg')";

    title.textContent = "EGYPT";

    description.textContent =
        "Home to ancient wonders, golden deserts, and the timeless Pyramids of Giza.";
});


// GREECE
kenya.addEventListener("click", () => {

    setActive(kenya.querySelector("img"));

    banner.style.backgroundImage = "url('kenya2.jpg')";

    title.textContent = "KENYA";

    description.textContent =
        "Experience breathtaking safaris, diverse wildlife, and stunning natural landscapes.";
});




Nigeria.addEventListener("click", () => {

    setActive(Nigeria.querySelector("img"));

    banner.style.backgroundImage = "url('nigeria2.jpg')";

    title.textContent = "NIGERIA";

    description.textContent =
        "A vibrant nation rich in culture, bustling cities, and unforgettable experiences.";
});




southafrica.addEventListener("click", () => {

    setActive(southafrica.querySelector("img"));

    banner.style.backgroundImage = "url('southafrica1.jpg')";

    title.textContent = "S-AFRICA";

    description.textContent =
        "Discover colorful cities and rich cultures in South-Africa.";
});



window.addEventListener("DOMContentLoaded", () => {
    setActive(egypt.querySelector("img"));

    banner.style.backgroundImage = "url('egypt5.jpg')";

    title.textContent = "EGYPT";

    description.textContent =
        "Home to ancient wonders, golden deserts, and the timeless Pyramids of Giza.";
});
