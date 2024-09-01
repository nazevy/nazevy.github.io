function changeTheme(color) {    
    let cs = color.toLowerCase();
    document.body.className = '';
    document.body.classList.add(themeClass);
    document.getElementById("theme").setAttribute('href','../theme/'+cs+'.css');
    
}
