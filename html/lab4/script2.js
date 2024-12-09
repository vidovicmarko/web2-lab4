document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            alert(`Kliknuli ste na sliku: ${img.alt}`);
        });
    });
});
