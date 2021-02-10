const isPhone = (sw) => {
    return sw <= 812 
}
const isDesktop = (sw) => {
    return sw > 812
}
const displayPhoneMenu = () => {
    const drinks = document.getElementById("drinks");
    const beer = document.getElementById("beer");
    const wine = document.getElementById("wine");
    const nealko = document.getElementById("nealko");
    const shots = document.getElementById("shots");
    const menuDrinks = [drinks, beer, wine, nealko, shots];
    menuDrinks.forEach(item => {
        item.src = `./images/menucelular/${item.id}.png`
    })

}
const chooseDisplay = () => {
    const sw = screen.width;
    const drinks = document.getElementById("drinks");
    if(isPhone(sw)){
        displayPhoneMenu();
    }else {
        drinks.src = "./images/menu desktop/menu-drinks-desktop.png"
    }
}

window.onload = chooseDisplay;
window.onresize = chooseDisplay;

