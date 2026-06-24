document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('button-container');
    if (!container) return;
    for (let i = 0; i < 5; i++) {
        const img = document.createElement('img');
        img.src = `assets/buttons/${Math.floor(Math.random() * 80)}.gif`;
        container.appendChild(img);
    }
});
