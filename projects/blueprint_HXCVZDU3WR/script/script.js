// Change theme and update stylesheet
function changeTheme(color) {
  const theme = color.toLowerCase();
  document.body.className = theme;
  document.getElementById('theme').href = `../theme/${theme}.css`;
}

document.getElementById('nav-toggle')?.addEventListener('click', () => {
  document.getElementById('navigation')?.classList.toggle('responsive');
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
