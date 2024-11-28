document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('nav ul li a');
    var form = document.querySelector('form');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var navToggle = document.getElementById('nav-toggle');
    var navUl = document.querySelector('nav ul');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            var _a;
            event.preventDefault();
            var targetId = (_a = link.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            event.preventDefault();
            alert('Please fill out all fields.');
        }
    });
    navToggle === null || navToggle === void 0 ? void 0 : navToggle.addEventListener('click', function () {
        navUl === null || navUl === void 0 ? void 0 : navUl.classList.toggle('active');
    });
});
