document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filters button");
    const images = document.querySelectorAll(".gallery img");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            images.forEach((img) => {
                if (filter === "all" || img.alt.toLowerCase().includes(filter)) {
                    img.style.display = "block";
                } else {
                    img.style.display = "none";
                }
            });
        });
    });
});
