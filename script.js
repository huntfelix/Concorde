// Reveal individual blocks so even long sections animate as they enter view.
// Content remains visible when JavaScript or animation support is unavailable.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('visible', entry.isIntersecting);
        });
    }, { threshold: 0, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.hero-content, .hero-image, .section-heading, .about-text, .team-card, .document-card, .sponsor-text, .sponsor-level, .sponsor-logos, .contact-intro, .contact-item').forEach(block => {
        block.classList.add('reveal-ready');
        observer.observe(block);
    });
}
