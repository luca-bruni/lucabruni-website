function loadNav() {
    document.addEventListener('DOMContentLoaded', () => {
        fetch('nav.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('nav-container').innerHTML = html;
        })
        .catch(err => console.error('Error loading nav:', err));
    });
}

function loadFooter() {
    document.addEventListener('DOMContentLoaded', () => {
        fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-container').innerHTML = html;
            populateFooterButtons();
        })
        .catch(err => console.error('Error loading footer:', err));
    });
}

function populateFooterButtons() {
    const numButtons = 5;
    const maxIndex = 79; /* For now */
  
    const container = document.getElementById('button-container');
    for (let i = 0; i < numButtons; ++i) {
      let randomIndex = Math.floor(Math.random() * maxIndex);
  
      const img = document.createElement('img');
      img.src = "assets/buttons/" + randomIndex.toString() + ".gif";
      img.style = "padding: 2px";
      container.appendChild(img);
    }
}