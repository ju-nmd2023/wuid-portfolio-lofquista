// Dark mode //

document.addEventListener("DOMContentLoaded", function () {
  let darkModeElements = document.querySelectorAll(".darkmode-section");
  let darkModeButton = document.getElementById("darkModeButton");

  function toggleDarkMode() {
    darkModeElements.forEach((section) => {
      section.classList.toggle("dark-mode");
    });

    const icon = darkModeButton.querySelector("i");
    const isDarkMode = darkModeElements[0].classList.contains("dark-mode");

    if (isDarkMode) {
      icon.classList.remove("fa-moon-o");
      icon.classList.add("fa-sun-o");
    } else {
      icon.classList.remove("fa-sun-o");
      icon.classList.add("fa-moon-o");
    }

    // Next line was adapted from https://www.w3schools.com/jsref/prop_win_localstorage.asp //

    localStorage.setItem("dark-mode", isDarkMode);
  }
  
  if (darkModeButton) {
    darkModeButton.addEventListener("click", toggleDarkMode);
  }

  // Next line was adapted from https://www.w3schools.com/jsref/prop_win_localstorage.asp //

  const savedDarkMode = localStorage.getItem("darkMode");
  if (savedDarkMode === "true") {
    toggleDarkMode();
  }
});
