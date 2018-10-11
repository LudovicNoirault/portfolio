var clicked = false;

function openSide() {

    var burgerElem = document.getElementById("burger");
    var sideElem = document.getElementById("side");
    var sideMain = document.getElementById("main");

    console.log("click dammit !")

    if (clicked === true) {
        sideElem.style.left = "0";
        sideMain.style.width = "62vw"
        burgerElem.style.left = "17.5rem";
        clicked = false;
    } else {
        sideElem.style.left = "-17rem";
        sideMain.style.width = "95vw";
        burgerElem.style.left = "0.5rem";
        burgerElem.style.opacity = "1";
        clicked = true;
    }
};