// Simple JavaScript for button animations
document.addEventListener('DOMContentLoaded', function() {
    const actionButtons = document.querySelectorAll('.action-btn');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.innerHTML;
            this.innerHTML = '<svg class="btn-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Updated!';
            this.style.opacity = '0.8';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.opacity = '1';
            }, 1000);
        });
    });
    
    // Add hover effects to place items
    const placeItems = document.querySelectorAll('.place-item');
    
    placeItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(6px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
});
function closePromoBanner() {
    const banner = document.querySelector('.promo-banner');
    if (banner) {
        banner.style.animation = 'slideUp 0.3s ease-out';
        setTimeout(() => {
            banner.style.display = 'none';
        }, 300);
    }
}
function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("active");
}

window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
        document.getElementById("mobileMenu").classList.remove("active");
    }
});
