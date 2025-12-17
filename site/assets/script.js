// Modal functionality
function openSampleModal() {
    const modal = document.getElementById('sample-modal');
    if (modal) {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        
        // Focus the close button for accessibility
        const closeButton = modal.querySelector('.modal-close');
        if (closeButton) {
            closeButton.focus();
        }
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }
}

function closeSampleModal() {
    const modal = document.getElementById('sample-modal');
    if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        
        // Restore body scroll
        document.body.style.overflow = '';
    }
}

// Close modal when clicking outside of modal content
document.addEventListener('click', function(event) {
    const modal = document.getElementById('sample-modal');
    if (event.target === modal) {
        closeSampleModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeSampleModal();
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for skip link
            if (href === '#main-content') {
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Get header height for offset
                const header = document.querySelector('.site-header');
                const headerHeight = header ? header.offsetHeight : 0;
                
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Analytics event tracking (placeholder - integrate with your analytics tool)
    trackPageView();
    setupAnalyticsTracking();
});

// Analytics tracking functions (placeholders)
function trackPageView() {
    // Track page view
    console.log('Page view tracked');
}

function setupAnalyticsTracking() {
    // Track CTA button clicks
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('CTA Click', {
                text: this.textContent.trim(),
                url: this.getAttribute('href')
            });
        });
    });
    
    // Track section visibility
    observeSections();
}

function trackEvent(eventName, data) {
    // Integrate with your analytics tool (GA4, Plausible, etc.)
    console.log('Event tracked:', eventName, data);
}

// Intersection Observer for section tracking
function observeSections() {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    trackEvent('Section View', {
                        section: entry.target.id
                    });
                }
            });
        },
        {
            threshold: 0.5
        }
    );
    
    sections.forEach(section => {
        observer.observe(section);
    });
}
