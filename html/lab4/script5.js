document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header h1");
    const text = header.textContent;
    header.textContent = "";

    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            header.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 150);
        }
    }

    typeWriter();
});
