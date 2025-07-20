// Theme toggle: Light/Dark
const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

function updateTheme() {
  if (document.body.classList.toggle("dark")) {
    localStorage.setItem("theme", "dark");
    themeIcon.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeIcon.textContent = "🌙";
  }
}

toggleBtn.onclick = updateTheme;

// Load theme from localStorage
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeIcon.textContent = "☀️";
  }
  // Animate skill bars
  document.querySelectorAll('.skill-bar').forEach(bar => {
    setTimeout(() => bar.classList.add('show'), 500);
  });
};
