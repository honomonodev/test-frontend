document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    const form = document.querySelector('form');
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const messageInput = document.getElementById('message') as HTMLTextAreaElement;

    const navToggle = document.getElementById('nav-toggle');
    const navUl = document.querySelector('nav ul');

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

    form?.addEventListener('submit', (event) => {
        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            event.preventDefault();
            alert('Please fill out all fields.');
        }
    });

    navToggle?.addEventListener('click', () => {
        navUl?.classList.toggle('active');
    });
});