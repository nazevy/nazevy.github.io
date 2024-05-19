function changeTheme(color) {
    let cs = color.toLowerCase();
    document.getElementById("theme").setAttribute('href','../theme/'+cs+'.css');
}
