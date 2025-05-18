// Clock functionality
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('clock').textContent = timeString;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call

// Theme switching functionality
const themeSwitch = document.getElementById('theme-switch');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Function to set theme
function setTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeSwitch.checked = !isDark;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Initialize theme based on system preference or saved preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme === 'dark');
} else {
    setTheme(prefersDarkScheme.matches);
}

// Listen for theme switch changes
themeSwitch.addEventListener('change', (e) => {
    setTheme(!e.target.checked);
});

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches);
    }
});

// Quote functionality
const quotes = [
    {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        text: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs"
    },
    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    }
];

function updateQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').textContent = randomQuote.text;
    document.getElementById('quote-author').textContent = `- ${randomQuote.author}`;
}

// Update quote on load
updateQuote();

// Secret key combinations
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
const rainbowCode = ['r', 'a', 'i', 'n', 'b', 'o', 'w'];
const spinCode = ['s', 'p', 'i', 'n'];
const bounceCode = ['b', 'o', 'u', 'n', 'c', 'e'];

let konamiIndex = 0;
let rainbowIndex = 0;
let spinIndex = 0;
let bounceIndex = 0;

function resetIndices() {
    konamiIndex = 0;
    rainbowIndex = 0;
    spinIndex = 0;
    bounceIndex = 0;
}

function applyAnimation(element, animationClass) {
    element.classList.add(animationClass);
    setTimeout(() => {
        element.classList.remove(animationClass);
    }, 3000);
}

document.addEventListener('keydown', (e) => {
    // Konami Code
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            document.querySelector('.container').classList.add('animate-spin');
            setTimeout(() => {
                document.querySelector('.container').classList.remove('animate-spin');
            }, 1000);
            resetIndices();
        }
    } else {
        konamiIndex = 0;
    }

    // Rainbow Code
    if (e.key === rainbowCode[rainbowIndex]) {
        rainbowIndex++;
        if (rainbowIndex === rainbowCode.length) {
            applyAnimation(document.querySelector('.greeting'), 'animate-rainbow');
            resetIndices();
        }
    } else {
        rainbowIndex = 0;
    }

    // Spin Code
    if (e.key === spinCode[spinIndex]) {
        spinIndex++;
        if (spinIndex === spinCode.length) {
            applyAnimation(document.querySelector('.clock'), 'animate-spin');
            resetIndices();
        }
    } else {
        spinIndex = 0;
    }

    // Bounce Code
    if (e.key === bounceCode[bounceIndex]) {
        bounceIndex++;
        if (bounceIndex === bounceCode.length) {
            applyAnimation(document.querySelector('.quote-container'), 'animate-bounce');
            resetIndices();
        }
    } else {
        bounceIndex = 0;
    }
});

// Cheatsheet functionality
const cheatsheetBtn = document.getElementById('cheatsheet-btn');
const cheatsheet = document.getElementById('cheatsheet');
const closeCheatsheet = document.getElementById('close-cheatsheet');

function toggleCheatsheet() {
    cheatsheet.classList.toggle('active');
}

cheatsheetBtn.addEventListener('click', toggleCheatsheet);
closeCheatsheet.addEventListener('click', toggleCheatsheet);

// Close cheatsheet when clicking outside
cheatsheet.addEventListener('click', (e) => {
    if (e.target === cheatsheet) {
        toggleCheatsheet();
    }
});

// Close cheatsheet with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cheatsheet.classList.contains('active')) {
        toggleCheatsheet();
    }
});

// Greeting functionality
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting;
    
    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon";
    } else if (hour >= 17 && hour < 21) {
        greeting = "Good Evening";
    } else {
        greeting = "Good Night";
    }
    
    document.querySelector('.greeting').textContent = `${greeting}, Czeux!`;
}

// Update greeting on load and every minute
updateGreeting();
setInterval(updateGreeting, 60000);

// Additional secret key combinations
const shakeCode = ['s', 'h', 'a', 'k', 'e'];
const flipCode = ['f', 'l', 'i', 'p'];
const pulseCode = ['p', 'u', 'l', 's', 'e'];
const waveCode = ['w', 'a', 'v', 'e'];
const glitchCode = ['g', 'l', 'i', 't', 'c', 'h'];
const matrixCode = ['m', 'a', 't', 'r', 'i', 'x'];

let shakeIndex = 0;
let flipIndex = 0;
let pulseIndex = 0;
let waveIndex = 0;
let glitchIndex = 0;
let matrixIndex = 0;

// Matrix rain effect
function createMatrixRain() {
    const container = document.getElementById('matrix-container');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const columns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < columns; i++) {
        const char = document.createElement('div');
        char.className = 'matrix-char';
        char.style.left = `${i * 20}px`;
        char.style.top = `${Math.random() * -100}px`;
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        container.appendChild(char);
        
        animateMatrixChar(char);
    }
}

function animateMatrixChar(char) {
    const duration = 1000 + Math.random() * 2000;
    const start = -100;
    const end = window.innerHeight;
    
    function animate() {
        const now = Date.now();
        const progress = (now - startTime) / duration;
        
        if (progress < 1) {
            char.style.top = `${start + (end - start) * progress}px`;
            requestAnimationFrame(animate);
        } else {
            char.style.top = `${start}px`;
            char.textContent = chars[Math.floor(Math.random() * chars.length)];
            startTime = Date.now();
            animate();
        }
    }
    
    let startTime = Date.now();
    animate();
}

// Update resetIndices function
function resetIndices() {
    konamiIndex = 0;
    rainbowIndex = 0;
    spinIndex = 0;
    bounceIndex = 0;
    shakeIndex = 0;
    flipIndex = 0;
    pulseIndex = 0;
    waveIndex = 0;
    glitchIndex = 0;
    matrixIndex = 0;
}

// Update keydown event listener
document.addEventListener('keydown', (e) => {
    // Existing codes...
    
    // Shake Code
    if (e.key === shakeCode[shakeIndex]) {
        shakeIndex++;
        if (shakeIndex === shakeCode.length) {
            applyAnimation(document.querySelector('.search-container'), 'animate-shake');
            resetIndices();
        }
    } else {
        shakeIndex = 0;
    }

    // Flip Code
    if (e.key === flipCode[flipIndex]) {
        flipIndex++;
        if (flipIndex === flipCode.length) {
            applyAnimation(document.querySelector('.bookmarks'), 'animate-flip');
            resetIndices();
        }
    } else {
        flipIndex = 0;
    }

    // Pulse Code
    if (e.key === pulseCode[pulseIndex]) {
        pulseIndex++;
        if (pulseIndex === pulseCode.length) {
            applyAnimation(document.querySelector('.theme-toggle'), 'animate-pulse');
            resetIndices();
        }
    } else {
        pulseIndex = 0;
    }

    // Wave Code
    if (e.key === waveCode[waveIndex]) {
        waveIndex++;
        if (waveIndex === waveCode.length) {
            applyAnimation(document.querySelector('.greeting'), 'animate-wave');
            resetIndices();
        }
    } else {
        waveIndex = 0;
    }

    // Glitch Code
    if (e.key === glitchCode[glitchIndex]) {
        glitchIndex++;
        if (glitchIndex === glitchCode.length) {
            applyAnimation(document.querySelector('.container'), 'animate-glitch');
            resetIndices();
        }
    } else {
        glitchIndex = 0;
    }

    // Matrix Code
    if (e.key === matrixCode[matrixIndex]) {
        matrixIndex++;
        if (matrixIndex === matrixCode.length) {
            const matrixContainer = document.getElementById('matrix-container');
            matrixContainer.classList.add('active');
            createMatrixRain();
            setTimeout(() => {
                matrixContainer.classList.remove('active');
                matrixContainer.innerHTML = '';
            }, 5000);
            resetIndices();
        }
    } else {
        matrixIndex = 0;
    }
});

// Update cheatsheet content
const cheatsheetList = document.querySelector('.cheatsheet ul');
cheatsheetList.innerHTML = `
    <li><kbd>↑↑↓↓←→←→BA</kbd> - Spin everything</li>
    <li><kbd>rainbow</kbd> - Rainbow greeting</li>
    <li><kbd>spin</kbd> - Spin clock</li>
    <li><kbd>bounce</kbd> - Bounce quote</li>
    <li><kbd>shake</kbd> - Shake search bar</li>
    <li><kbd>flip</kbd> - Flip bookmarks</li>
    <li><kbd>pulse</kbd> - Pulse theme toggle</li>
    <li><kbd>wave</kbd> - Wave greeting</li>
    <li><kbd>glitch</kbd> - Glitch effect</li>
    <li><kbd>matrix</kbd> - Matrix rain effect</li>
`; 