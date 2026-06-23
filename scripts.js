function loadFragment(url, containerId, onLoad) {
    fetch(url)
        .then(r => {
            if (!r.ok) throw new Error(`${r.status} loading ${url}`);
            return r.text();
        })
        .then(html => {
            const el = document.getElementById(containerId);
            if (!el) throw new Error(`#${containerId} not found`);
            el.innerHTML = html;
            if (onLoad) onLoad();
        })
        .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', () => {
    loadFragment('nav.html', 'nav-container');
    loadFragment('footer.html', 'footer-container', populateFooterButtons);
});

function populateFooterButtons() {
    const container = document.getElementById('button-container');
    if (!container) return;
    for (let i = 0; i < 5; i++) {
        const img = document.createElement('img');
        img.src = `assets/buttons/${Math.floor(Math.random() * 80)}.gif`;
        container.appendChild(img);
    }
}
