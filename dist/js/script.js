function openSide() {

    var burgerElem = document.getElementById("burger");
    var sideElem = document.getElementById("side");
    var mainElem = document.getElementById("main");

    console.log("click dammit !")

    if (sideElem.style.left === "-17rem") {
        sideElem.style.left = "0";
        burgerElem.style.left = "17.5rem";
        mainElem.style.width = "67%";

    } else {
        sideElem.style.left = "-17rem";
        burgerElem.style.left = "0.5rem";
        mainElem.style.width = "95%";
    }
};

var counter = 0;

function slide(arrow) {
    var arrowPressed = document.getElementById(arrow);

    var leftArrow = document.getElementById("leftArrow");
    var rightArrow = document.getElementById("rightArrow");

    var elemProjects = document.getElementById("projects");
    var listProjects = elemProjects.children;
    var project;

    /* handle the counter */
    if (arrowPressed === leftArrow) {
        counter = counter - 1;
    } else {
        counter = counter + 1;
    };

    console.log('Current counter', counter);

    project = listProjects[counter];
    project.style.zIndex = 0;

    /*handle visibility of the arrows*/
    if (counter != 0) {
        leftArrow.style.visibility = "visible";
    } else {
        leftArrow.style.visibility = "hidden";
    };

    if (counter === (listProjects.length - 1)) {
        rightArrow.style.visibility = "hidden";
    } else {
        rightArrow.style.visibility = "visible";
    };

    for (var i = 0; i < listProjects.length; i++) {
        listProjects[i].style.zIndex = 0;
    }

    project.style.left = 0;
    project.style.zIndex = 1;
}