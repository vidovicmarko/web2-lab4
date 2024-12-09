document.addEventListener("DOMContentLoaded", () => {
    const lebronImage = document.querySelector('.lebron-gallery img[alt="Lebron0"]');

    if (lebronImage) {
        let scale = 1;
        let direction = 1;

        function animateImage() {
            scale += 0.002 * direction;
            if (scale >= 1.05 || scale <= 0.98) {
                direction *= -1;
            }
            lebronImage.style.transform = `scale(${scale})`;
            lebronImage.style.transition = "transform 0.1s";
            requestAnimationFrame(animateImage);
        }

        animateImage();
    }
});

