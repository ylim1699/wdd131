const themeSelector = document.getElementById("themeSelector");
themeSelector.addEventListener('change', changeTheme);


function changeTheme() {
    const selectedTheme = themeSelector.value;

    // resets the logo color to blue
    const logoSelector = document.querySelector("footer");
    const image = logoSelector.querySelector("img")
    image.setAttribute("src", "images/byui-logo_blue.webp");

    if (selectedTheme === 'dark') {
        document.body.classList.add('dark');
        document.body.classList.remove('yellow');

        const logoSelector = document.querySelector("footer");
        const image = logoSelector.querySelector("img")
        image.setAttribute("src", "images/byui-logo_white.png");
        // or you can do shorter const logoSelector = document.getElementById('logo');
        // logoSelector.innerHTML = '<img class="logo" src="images/byui-logo_white.png" alt="logo of byui">'
    } 
    else if (selectedTheme === 'yellow') {
        document.body.classList.add('yellow');
        document.body.classList.remove('dark');
    }
    else if (selectedTheme === "light") {
        document.body.classList.remove('dark','yellow');
    }
    else if (selectedTheme === "nothing") {
        
    }
}

