document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Hide mobile menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            mobileMenu?.classList.add('hidden');
        }
    });

    // Active link highlighting with event delegation
    document.querySelector('.nav-link')?.parentElement?.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            e.target.classList.add('active');
        }
    });
});

// Essential styles
const styles = {
    '.scroll-down': {
        transform: 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out'
    },
    '.scroll-up': {
        transform: 'translateY(0)',
        transition: 'transform 0.3s ease-in-out'
    }
};
