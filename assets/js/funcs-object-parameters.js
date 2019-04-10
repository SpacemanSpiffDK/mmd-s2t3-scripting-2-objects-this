// key-value pairs as parameters

function manipulateClass(parms) {

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

    if (!targetSelectorUndefined && !classNameUndefined) {
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

window.onload = function () {
    manipulateClass({targetSelector: "#block1", isAdd: true, className: "red"});
    manipulateClass({className: "green", isAdd: true, targetSelector: ".block2"});
    manipulateClass({className: "blue", targetSelector: "textarea"});
}