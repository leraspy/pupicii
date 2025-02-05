// Deschide fereastra modală când se apasă pe inima centrală
document.querySelector('.central-heart').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

// Închide fereastra modală când se apasă pe butonul de închidere
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Închide fereastra modală când se apasă în afara ei
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});

// Adaugă inimi random pe ecran
function createHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '&#10084;';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heartsContainer.appendChild(heart);
    }
}

createHearts();