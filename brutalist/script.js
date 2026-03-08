document.addEventListener("DOMContentLoaded", () => {
    // Brutalist Intersection Observer
    // Elements should "snap" into place suddenly, fitting the harsh aesthetic

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const snapObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add class to trigger CSS transition
                entry.target.classList.add('is-visible');
                
                // Once visible, stop observing to keep it harsh and permanent
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements designated for the snap animation
    const revealElements = document.querySelectorAll('.reveal-snap');
    
    revealElements.forEach(el => {
        snapObserver.observe(el);
    });

    // Brutalist Form Handling (Prevent default to simulate raw interaction)
    const brutalistForm = document.querySelector('.brutalist-form');
    if (brutalistForm) {
        brutalistForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = brutalistForm.querySelector('button[type="submit"]');
            
            // Visual feedback of raw brutalist interaction
            const originalText = btn.textContent;
            btn.textContent = "ALINDI // İŞLENİYOR...";
            btn.style.backgroundColor = "var(--accent-acid)";
            btn.style.color = "var(--bg-paper)";
            
            setTimeout(() => {
                btn.textContent = "BAŞARILI / MESAJ GİTTİ";
                btn.style.backgroundColor = "var(--ink-black)";
                btn.style.color = "var(--bg-paper)";
                brutalistForm.reset();
                
                // Reset after a few seconds
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.backgroundColor = "";
                    btn.style.color = "";
                }, 3000);
            }, 1000); // Simulate network request
        });
    }

    // Dynamic Marquee Text duplicator to ensure infinite scroll fills screen
    const marqueeContainer = document.querySelector('.marquee');
    if (marqueeContainer) {
        const marqueeText = marqueeContainer.innerHTML;
        // Duplicate content heavily to ensure it spans across even massive ultrawide monitors
        marqueeContainer.innerHTML = marqueeText + marqueeText + marqueeText + marqueeText;
    }
});