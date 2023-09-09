function changeTheme(color) {
    let cs = color.toLowerCase();
    document.getElementById("theme").setAttribute('href','../Themes/'+cs+'.css');
}
