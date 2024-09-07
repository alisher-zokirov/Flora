const themes = {
    light: {
        '--body-bg': 'white',
        '--navbar-bg': '#EFF8FF',
        '--text-color': 'black',
        '--text-color2' :'#025595',
        '--button-color' : 'white',
        '--button-bg': '#025595',
        '--button-text': 'white'
    },

    dark: {
        '--body-bg': 'black',
        '--navbar-bg': 'black',
        '--text-color': 'white',
        '--text-color2' :'white',
        '--button-color' : 'white',
        '--button-bg': 'grey',
        '--button-text': 'black'
    }
}

const btnTheme = document.querySelector(".navbar-btn");
btnTheme.addEventListener("click", selectTheme)

function selectTheme() {
    if (btnTheme.classList.contains("btn-light")) {
        btnTheme.classList.remove('btn-light');
        btnTheme.innerHTML = "Dark"
        btnTheme.classList.add('btn-dark')
        btnTheme.setAttribute('data-theme', 'dark')
    } else {
        btnTheme.innerHTML = "Light"
        btnTheme.classList.remove('btn-dark')
        btnTheme.classList.add('btn-light')
        btnTheme.setAttribute('data-theme', 'light')
    }

    const themeAttr = btnTheme.getAttribute('data-theme')
    const themeObj = themes[themeAttr];
    let themeStr = ''

    for (const key in themeObj) {
        themeStr += `${key}: ${themeObj[key]};`
    }

    document.documentElement.style = themeStr;
}