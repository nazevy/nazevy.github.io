// Change theme and update stylesheet
function changeTheme(color) {
  const theme = color.toLowerCase();
  document.body.className = theme;
  document.getElementById('theme').href = `../theme/${theme}.css`;
}

// Function to handle click on the hamburger button
document.getElementById('nav-toggle')?.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the click event from bubbling up to the document
  document.getElementById('navigation')?.classList.toggle('responsive');
});

// Event listener for clicks outside the navigation or hamburger button
document.addEventListener('click', (event) => {
  const nav = document.getElementById('navigation');
  const navToggle = document.getElementById('nav-toggle');

  // If the click was outside the hamburger or the menu, close the menu
  if (nav && navToggle && !navToggle.contains(event.target) && !nav.contains(event.target)) {
    nav.classList.remove('responsive');
  }
});

// Set default theme based on OS preference
changeTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default');

// Toggle theme dropdown
document.querySelectorAll('.dpdwn-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const dpdwn = btn.parentElement;
    dpdwn.classList.toggle('active');
  });
});

// Close dropdown if clicking outside
document.addEventListener('click', () => {
  document.querySelectorAll('.dpdwn.active').forEach(d => d.classList.remove('active'));
});
