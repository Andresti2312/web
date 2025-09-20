// Genera estrellas para el fondo de galaxia
const galaxyBg = document.getElementById('galaxy-bg');
const numStars = 100;

for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 2 + 1}px`;
    star.style.height = star.style.width;
    star.style.opacity = Math.random();
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    galaxyBg.appendChild(star);
}

// Estilo CSS para las estrellas generado por JS
const starStyle = document.createElement('style');
starStyle.innerHTML = `
    .star {
        position: absolute;
        background-color: #fff;
        border-radius: 50%;
        animation: twinkle linear infinite;
    }
    @keyframes twinkle {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(0.5); opacity: 0.5; }
    }
`;
document.head.appendChild(starStyle);

// Genera las flores amarillas
const flowersContainer = document.querySelector('.flowers-container');
const numFlowers = 7; // Puedes cambiar el número de flores

for (let i = 0; i < numFlowers; i++) {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.innerHTML = '🌻'; // El emoji de girasol
    flowersContainer.appendChild(flower);
}