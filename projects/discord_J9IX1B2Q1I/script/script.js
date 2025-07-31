function changeTheme(color) {    
    let cs = color.toLowerCase();
    document.body.className = '';
    document.body.classList.add(cs);
    document.getElementById("theme").setAttribute('href','../theme/'+cs+'.css');
}

const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navigation');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('responsive'); // Toggle the responsive class
    console.log('Hamburger clicked!'); // Debugging: Check if the click event is firing
});
