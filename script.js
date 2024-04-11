document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.getElementById("stars-container");
    const numStars = 1000;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        starsContainer.appendChild(star);
        positionStar(star);
    }
});

function positionStar(star) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = Math.random() * 5;

    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.width = size + "px";
    star.style.height = size + "px";
}

