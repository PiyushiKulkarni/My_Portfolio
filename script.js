document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    // const darkModeToggle = document.createElement('button');
    // darkModeToggle.innerText = 'Toggle Dark Mode';
    // darkModeToggle.addEventListener('click', toggleDarkMode);

    // const header = document.querySelector('header');
    // header.appendChild(darkModeToggle);

    // function toggleDarkMode() {
    //     body.classList.toggle('dark-mode');
    // }
});
function goToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
document.addEventListener('DOMContentLoaded', function () {
    const goToTopBtn = document.getElementById('goToTopBtn');

    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goToTopBtn.style.display = 'block';
        } else {
            goToTopBtn.style.display = 'none';
        }
    };
});

