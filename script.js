// Content stays visible if JavaScript or animation support is unavailable.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
    // Stagger sibling tiles. Each tile still waits until it enters the viewport,
    // so vertically stacked tiles on mobile never animate before being seen.
    document.querySelectorAll('.team-grid, .portfolio-grid, .sponsor-levels, .sponsor-logos, .contact-details').forEach(group => {
        Array.from(group.children).forEach((tile, index) => {
            tile.style.setProperty('--reveal-delay', `${Math.min(index, 3) * 120}ms`);
        });
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('visible', entry.isIntersecting);
        });
    }, { threshold: 0, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.hero-content, .hero-image, .section-heading, .about-text, .team-card, .document-card, .sponsor-text, .sponsor-level, .sponsor-logos > div, .contact-intro, .contact-item').forEach(block => {
        block.classList.add('reveal-ready');
        observer.observe(block);
    });
}
