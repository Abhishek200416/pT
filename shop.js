let currentIndex = 0;
const ads = document.querySelector('.ad-items');
const totalAds = document.querySelectorAll('.ad-items img').length;

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// Function to move to the next ad
function nextAd() {
    if (currentIndex < totalAds - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first ad
    }
    updateCarousel();
}

// Function to move to the previous ad
function prevAd() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalAds - 1; // Loop to the last ad
    }
    updateCarousel();
}

// Function to update the carousel transform for sliding effect
function updateCarousel() {
    const offset = -currentIndex * (600 + 20); // 600px width of image + 20px gap
    ads.style.transform = `translateX(${offset}px)`;
}

// Event listeners for buttons
nextBtn.addEventListener('click', nextAd);
prevBtn.addEventListener('click', prevAd);

// Optional: Autoplay every 3 seconds
setInterval(nextAd, 3000);