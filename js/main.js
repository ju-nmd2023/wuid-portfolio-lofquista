// document.addEventListener('DOMContentLoaded', function() {
//     const contactForm = document.getElementById('contactForm');
// const emailBox = document.getElementsByClassName("email-box");
// });

// contactForm.addEventListener('submit', function(event) {
//     if (!emailBox.value.includes('@')) {
//         alert('Your email address have to contain a @.');
//         event.preventDefault();
//     }
// });
  

document.addEventListener('DOMContentLoaded', function () {
    let darkMode = document.querySelectorAll(".darkmode-section");
    let darkModeButton = document.getElementById("darkModeButton");
    
    function toggleDarkMode() {
        darkMode.forEach(section => {
            section.classList.toggle("dark-mode");
        });

        const icon = darkModeButton.querySelector("i");
        const isDarkMode = darkMode[0].classList.contains("dark-mode");

if (isDarkMode) {
    icon.classList.remove("fa-moon-o");
    icon.classList.add("fa-sun-o")
} else {
    icon.classList.remove("fa-sun-o");
    icon.classList.add("fa-moon-o");
}

        localStorage.setItem("dark-mode", isDarkMode);
    }
    if (darkModeButton) {
        darkModeButton.addEventListener("click", toggleDarkMode);
    }

    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
        toggleDarkMode();
    }
});