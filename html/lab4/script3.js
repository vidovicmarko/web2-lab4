document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery img");

    images.forEach((img) => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.25)";
            img.style.transition = "transform 0.3s ease";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });
});
