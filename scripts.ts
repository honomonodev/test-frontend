document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href')?.substring(1);
            const targetElement = document.getElementById(targetId!);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLTextAreaElement;

    form?.addEventListener('submit', (event) => {
        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            event.preventDefault();
            alert('Please fill out all fields.');
        }
    });

    // Responsive navigation
    const navToggle = document.getElementById('nav-toggle');
    const navUl = document.querySelector('nav ul');

    navToggle?.addEventListener('click', () => {
        navUl?.classList.toggle('active');
    });
});