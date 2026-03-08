// Five Server Path Resolver (for local development)
// EnsureFiveServerRunning() {
//     // For local development with Five Server, ensure files are placed in an alternative lower path
//     if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
//         // Log a note, but we'll stick to a more universal fix that doesn't rely on specific five-server settings
//         console.log("FREEMAN DEMO: Detected local development (Five Server). Ensure ./style.css can be found in the current directory.");
//     }
// }

// Core Reveal Snap Functionality
class BrutalistReveal {
    constructor(options = {}) {
        this.options = {
            threshold: 0.1, // Trigger when 10% of the section is visible
            snapMargin: '0px',
            ...options
        };
        this.observer = null;
        this.init();
    }

    init() {
        // Find all elements marked for reveal
        this.targets = document.querySelectorAll('.reveal-snap');
        this.createObserver();
        this.observeElements();
        
        // EnsureFirstImpression()
        // Special case: Ensure that the top of the hero is immediately professional, avoiding initial-snap issue shown in image_80b9ca.png
        this.preShowFirstElement();
    }

    createObserver() {
        // Configure intersection observer with specific options for snap-behavior
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Instantly snap to visible with a brief cubic-bezier transform reset, giving a 'snap' effect
                    entry.target.classList.add('is-visible');
                    // Stop observing once visible to maintain snap effect and reduce performance load
                    this.observer.unobserve(entry.target);
                }
            });
        }, this.options);
    }

    observeElements() {
        this.targets.forEach(target => {
            this.observer.observe(target);
        });
    }

    // A specific fix to resolve image_80b9ca.png empty gap on load
    preShowFirstElement() {
        const heroContent = document.querySelector('.hero-content.reveal-snap');
        if (heroContent) {
            // Apply is-visible immediately for hero-content so the massive title loads professional
            heroContent.classList.add('is-visible');
        }
    }
}

// EnsureFiveServerRunning(); // Check local development path on startup

// Initialize Brutalist Reveal effect on DOMContentLoaded
// Initialize Brutalist Reveal effect on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Custom threshold option used here for specific brutally fast interaction
    new BrutalistReveal({ threshold: 0.05 });

    // --- EKSİK KALAN SONSUZLUK MOTORU (MARQUEE FİX) ---
    const marqueeContainer = document.querySelector('.marquee');
    if (marqueeContainer) {
        const marqueeText = marqueeContainer.innerHTML;
        // Metni ultra geniş ekranlar için 5 katına çıkarıyoruz, asla bitmez!
        marqueeContainer.innerHTML = marqueeText + marqueeText + marqueeText + marqueeText + marqueeText;
    }
});