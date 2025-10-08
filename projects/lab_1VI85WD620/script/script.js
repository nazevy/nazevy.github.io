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

// Trial Bottom-Menu Scroll
    const scrollContainer = document.querySelector('.menu-scroll');
    const links = document.querySelectorAll('.menu-scroll a');
    const sections = document.querySelectorAll('section');
    let scrollTimeout;
    let isMenuScrolling = false;

    // Sync menu scroll to page section navigation
    scrollContainer.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollLeft = scrollContainer.scrollLeft;
        const viewportWidth = scrollContainer.offsetWidth;
        const index = Math.round(scrollLeft / viewportWidth);
        if (links[index]) {
          const targetId = links[index].getAttribute('href');
          if (window.location.hash !== targetId) {
            isMenuScrolling = true;
            links[index].click();
            setTimeout(() => { isMenuScrolling = false; }, 300);
          }
        }
      }, 100);
    });

    // Sync page scroll to menu position
    const observer = new IntersectionObserver((entries) => {
      if (isMenuScrolling) return;
      
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const id = entry.target.getAttribute('id');
          const activeLink = document.querySelector(`.menu-scroll a[href="#${id}"]`);
          
          if (activeLink) {
            // Update active state
            links.forEach(link => link.classList.remove('active'));
            activeLink.classList.add('active');
            
            // Scroll menu to show active item
            const linkIndex = Array.from(links).indexOf(activeLink);
            const targetScroll = linkIndex * scrollContainer.offsetWidth;
            scrollContainer.scrollTo({ left: targetScroll, behavior: 'smooth' });
          }
        }
      });
    }, {
      threshold: [0.5],
      rootMargin: '-40px 0px -40px 0px'
    });

    sections.forEach(section => observer.observe(section));

    // Arrow button handlers
    document.querySelector('.arrow.left').addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
    });
    document.querySelector('.arrow.right').addEventListener('click', () => {
      scrollContainer.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
    });

