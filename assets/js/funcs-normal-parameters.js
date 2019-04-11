// JS by Dan Høegh
// UCN MMD 2019

// normal
// function parameters - WITH DEFAULT VALUE

function manipulateClass(targetSelector, className, isAdd = true) {

    // default values :::
    // function manipulateClass(targetSelector, className, isAdd = true)
    // so if we only pass the first 2 parameters we get isAdd as true
    // manipulateClass(targetSelector, className)

    let elms = document.querySelectorAll(targetSelector);
    for (let i = 0; i < elms.length; i++) {
        if (isAdd) {
            elms[i].classList.add(className);
        } else {
            elms[i].classList.remove(className);
        }
    }
}

window.onload = function () {

    let cars = ["Sally", "McQueen", "Luigi"];

    delete cars[1];



    manipulateClass("#block1", "red", false);
    manipulateClass(".block2", "blue");
    manipulateClass("textarea", "green");
}