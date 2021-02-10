const isPhone = (sw) => {
    return sw <= 812 
}
const isDesktop = (sw) => {
    return sw > 812
}
const chooseDisplay = () => {
    const sw = screen.width;
    const drinks = document.getElementById("drinks");
    if(isPhone(sw)){
        drinks.src = "./images/menucelular/menu-drinks-celular.png";
    }else {
        drinks.src = "./images/menu desktop/menu-drinks-desktop.png"
    }
}

window.onload = chooseDisplay;
window.onresize = chooseDisplay;

const displayPhoneMenu = () => {
    const drinks = document.getElementById("drinks");
    const beer = document.getElementById("beer");
    const wine = document.getElementById("wine");
    const nealko = document.getElementById("nealko");
    const menuDrinks = [drinks, beer, wine, nealko];
    // menuDrinks.forEach(item => )

}