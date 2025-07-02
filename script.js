// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Birthday date - CHANGE THIS TO HER ACTUAL BIRTHDAY
const birthdayDate = new Date('2025-07-03 00:00:00').getTime(); // YYYY-MM-DD format

// Countdown Timer
function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Confetti Animation
function launchConfetti() {
    // First burst
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    
    // Second burst with delay
    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
    }, 200);
    
    // Third burst with delay
    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
    }, 400);
}

// Reasons I Love You
const reasons = [
    "You light me up with your beautiful smile every single day 😊",
    "You are very smart and hardworking and always inspire me 🧙‍♀️",
    "You have the kindest heart and always care for me 💕",
    "Your laugh is my favorite thing in the entire universe 😄",
    "Even simplest moments feel special with you ✨",
    "Your dedication for work and learning inspires me daily 💻",
    "You're incredibly strong 💪",
    "Your hugs feel like home - warm, safe, and perfect 🤗",
    "You have innocent and cute smile😊",
    "Time with you makes me feel home, safe and comforting 🤗",
    "You make me want to be a better person every single day 🌱",
    "You are the most beautiful girl I know💕",
    "You are always honest and raw with me 🌈",
    "You are always loyal to me ✨",
    "You're not just my girlfriend, you're my best friend and my everything 💖"
];

let currentReasonIndex = 0;
let reasonsShown = 0;

function showNextReason() {
    if (reasonsShown < reasons.length) {
        const reasonDisplay = document.getElementById('reasonDisplay');
        const reasonBtn = document.getElementById('reasonBtn');
        const reasonCount = document.getElementById('reasonCount');
        
        // Add fade out effect
        reasonDisplay.style.opacity = '0';
        
        setTimeout(() => {
            reasonDisplay.innerHTML = `<p>${reasons[currentReasonIndex]}</p>`;
            reasonDisplay.style.opacity = '1';
            reasonDisplay.classList.add('fade-in');
            
            currentReasonIndex++;
            reasonsShown++;
            reasonCount.textContent = reasonsShown;
            
            if (reasonsShown >= reasons.length) {
                reasonBtn.textContent = '💖 All Love Revealed! 💖';
                reasonBtn.disabled = true;
                reasonBtn.style.opacity = '0.7';
                reasonBtn.style.cursor = 'not-allowed';
            }
        }, 300);
    }
}

// Update total reasons count
document.getElementById('totalReasons').textContent = reasons.length;

// Auto-launch confetti on page load
window.addEventListener('load', () => {
    setTimeout(() => {
        launchConfetti();
    }, 1000);
});

// Add smooth scrolling for any navigation links (if added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add some interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add click effect to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add floating animation to hero hearts
    const hearts = document.querySelectorAll('.floating-hearts .heart');
    hearts.forEach((heart, index) => {
        heart.style.animationDelay = `${index * 0.5}s`;
    });
});