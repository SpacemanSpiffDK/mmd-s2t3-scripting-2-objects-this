// functions in a JSON object

let js = {
    DOM: {
        find: function (targetSelector) {
            let elms = document.querySelectorAll(targetSelector);
            return elms;
        },
        write: function (targetSelector, content, isErase = true){
            let elms = js.dom.find(targetSelector);
            for (let i = 0; i < elms.length; i++) {
                if (isErase){
                    elms[i].innerHTML = content;
                } else {
                    elms[i].innerHTML += content;
                }
            }
        },
        empty: function (targetSelector){
            js.dom.write(targetSelector, "");
        },
        remove: function (targetSelector){
            let elms = js.dom.find(targetSelector);
            for (let i = 0; i < elms.length; i++) {
                let elm = elms[i];
                elm.parentNode.removeChild(elm);
            }
        },
        class: {
            add: function (targetSelector, className) {
                js.dom.class.manipulate({ targetSelector: targetSelector, className: className, isAdd: true });
            },
            remove: function (targetSelector, className) {
                js.dom.class.manipulate({ targetSelector: targetSelector, className: className, isAdd: false });
            },
            manipulate: function (parms) {
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
                    let elms = js.dom.find(parms.targetSelector);
                    // let elms = document.querySelectorAll(parms.targetSelector);
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
        }
    },
    math: {
        random: function (min, max) {
            min = parseInt(min);
            max = parseInt(max);
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            return randomNumber;
        },
        randomIndex: function (max) {
            let random = js.math.random(0, max);
            return random;
        }
    },
    array: {
        randomItem (arr) {
            // parameter: arr - an array
            let randomIndex = js.math.randomIndex(arr.length - 1)
            return arr[randomIndex];
        }
    }
};

window.onload = function () {

    // let testArray = ["one", "two", "three"];
    // alert(js.array.randomItem(testArray));
    // console.log(js.array.randomItem(testArray));

    // js.dom.class.manipulate({targetSelector: ".block2", className: "red"});
    // js.dom.class.add("#block1", "blue");
    // js.dom.class.remove("body > *", "helloWorld");

    // let number = js.random(0,5);
    // alert(number);

    // js.dom.write("#block1", "Ny header");

    // js.dom.remove("div.block2");
}