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
