/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const colorChange = color => {
        document.body.style.background = color;
    }

    Array.from(document.querySelectorAll("button")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (colorChange($btn.id), false),
        )
    );

    var red = document.getElementById("red");
    var redId = red.id;
    console.log(red);
    red.onclick = changeColor(redId);
    var green = document.getElementById("green");
    var greenId = green.id;
    console; log(green);
    green.onclick = changeColor(greenId);
    var blue = document.getElementById("blue");
    var blueId = blue.id;
    console.log(blue);
    blue.onclick = changeColor(blueId);
    var yellow = document.getElementById("yellow");
    var yellowId = yellow.id;
    console.log(yellow);
    yellow.onclick = changeColor(yellowId);

    function changeColor(color) {
        document.body.style.backgroundColor = color;
    }
})();
