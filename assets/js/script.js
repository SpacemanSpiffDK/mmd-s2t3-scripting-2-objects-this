// JS by Dan Høegh
// UCN MMD 2019

// normal function parameters
function manipulateClass(targetSelector, className, isAdd = true) {

    // default values :::
    // function manipulateClass(targetSelector, className, isAdd = true)
    // so if we only pass the first 2 parameters we get isAdd as true
    // manipulateClass(targetSelector, className)

    let targetFirstChar = targetSelector.substr(0, 1);
    if (targetFirstChar == "#") {
        let elm = document.querySelector(targetSelector);
        if (isAdd) {
            elm.classList.add(className);
        } else {
            elm.classList.remove(className);
        }
    } else {
        let elms = document.querySelectorAll(targetSelector);
        for (let i = 0; i < elms.length; i++) {
            if (isAdd) {
                elms[i].classList.add(className);
            } else {
                elms[i].classList.remove(className);
            }
        }
    }
}

window.onload = function(){
    manipulateClass("#block1", "red", false);
    manipulateClass(".block2", "red");
    manipulateClass("textarea", "red");
}


key-value pairs as parameters

function manipulateClass(parms){

    //// We need to check if our parameters have been set (are they undefined?)

    //// "Normal" way of putting true/false into a var depending on defined/undefined
    // let targetSelectorUndefined;
    // if (parms.targetSelector == undefined){
    //     targetSelectorUndefined = true;
    // } else {
    //     targetSelectorUndefined = false;
    // }

    //// This can be shorthanded down to this: (init variable, set it equal to the result of an implicit "if" sentence's two possible outcomes)
    // let targetSelectorUndefined = parms.targetSelector == undefined ? true: false;

    // Ultra shorthand, we just let the var be equal to the result of the "if" sentence
    let targetSelectorUndefined = parms.targetSelector == undefined;
    let classNameUndefined = parms.className == undefined;

    // Set default value of isAdd to "true"
    if (parms.isAdd == undefined) {
        parms.isAdd = true;
    }

    // console.log(parms.targetSelector);
    // console.log(parms.className);
    // console.log(parms.isAdd);

    if (!targetSelectorUndefined && !classNameUndefined){
        let elms = document.querySelectorAll(parms.targetSelector);
        for (let i = 0; i < elms.length; i++) {
            if (parms.isAdd) {
                elms[i].classList.add(parms.className);
            } else {
                elms[i].classList.remove(parms.className);
            }
        }
    } else {
        console.log("Error: One or more undefined parameter values");
    }
}

window.onload = function(){
    manipulateClass({targetSelector: "#block1", isAdd: true, className: "red"});
    manipulateClass({className: "green", isAdd: true, targetSelector: ".block2"});
    manipulateClass({className: "blue", targetSelector: "textarea"});
}






let spiff = {
    class: {
        add: function(targetSelector, className){
            spiff.class.manipulate({targetSelector: targetSelector, className: className, isAdd: true});
        },
        remove: function(targetSelector, className){
            spiff.class.manipulate({targetSelector: targetSelector, className: className, isAdd: false});
        },
        manipulate: function(parms){
            let targetSelectorUndefined = parms.targetSelector == undefined;
            let classNameUndefined = parms.className == undefined;
        
            // Set default value of isAdd to "true"
            if (parms.isAdd == undefined) {
                parms.isAdd = true;
            }
        
            // console.log(parms.targetSelector);
            // console.log(parms.className);
            // console.log(parms.isAdd);
        
            if (!targetSelectorUndefined && !classNameUndefined){
                let targetFirstChar = parms.targetSelector.substr(0, 1);
                if (targetFirstChar == "#") {
                    let elm = document.querySelector(parms.targetSelector);
                    if (parms.isAdd) {
                        elm.classList.add(parms.className);
                    } else {
                        elm.classList.remove(parms.className);
                    }
                } else {
                    let elms = document.querySelectorAll(parms.targetSelector);
                    for (let i = 0; i < elms.length; i++) {
                        if (parms.isAdd) {
                            elms[i].classList.add(parms.className);
                        } else {
                            elms[i].classList.remove(parms.className);
                        }
                    }
                }
            } else {
                console.log("Error: One or more undefined parameter values");
            }
        }
    },
    random: function(min, max){
        min = parseInt(min);
        max = parseInt(max);
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
    }
};

window.onload = function(){

    spiff.class.add("#block1", "blue");
    spiff.class.remove("body > *", "helloWorld");
    // spiff.class.manipulate({targetSelector: ".block2", className: "red"});
    
    
    // alert(spiff.random(0,5));
}