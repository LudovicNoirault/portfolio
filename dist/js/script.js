function openSide() {
    var burgerElem = document.getElementById("burger");
    var sideElem = document.getElementById("side");
    var sideFixedElem = document.getElementById("side-fixed");

    console.log("click motherfucker !")

    if (burgerElem.style.left === "1rem") {
        burgerElem.style.left = "17.5rem";
        sideElem.style.width = "20rem";
        sideFixedElem.style.width = "20rem";
        sideFixedElem.style.opacity = "1"
        console.log("IF click motherfucker !")
    } else {
        burgerElem.style.left = "1rem";
        burgerElem.style.opacity = "1";
        sideElem.style.width = "4rem";
        sideFixedElem.style.width = "-20rem";
        sideFixedElem.style.opacity = "0"
        console.log("ELSE click motherfucker !")
    }
};