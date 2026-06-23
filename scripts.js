document.addEventListener('DOMContentLoaded', () => {
    fetch('nav.html')
        .then(r => r.text())
        .then(html => { document.getElementById('nav-container').innerHTML = html; })
        .catch(err => console.error('Error loading nav:', err));

    fetch('footer.html')
        .then(r => r.text())
        .then(html => {
            document.getElementById('footer-container').innerHTML = html;
            populateFooterButtons();
        })
        .catch(err => console.error('Error loading footer:', err));
});

function populateFooterButtons() {
    const container = document.getElementById('button-container');
    for (let i = 0; i < 5; i++) {
        const img = document.createElement('img');
        img.src = `assets/buttons/${Math.floor(Math.random() * 80)}.gif`;
        img.style.padding = '2px';
        container.appendChild(img);
    }
}
