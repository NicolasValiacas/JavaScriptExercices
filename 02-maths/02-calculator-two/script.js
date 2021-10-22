/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        var a = document.getElementById("op-one").value; 
        var number1 = parseInt(a);
        var b = document.getElementById("op-two").value;
        var number2 = parseInt(b);

        switch (operation){

            case 'addition' : 
                alert(number1+number2);
                break;
            case 'substraction' : 
                alert(number1-number2);
                break;
            case 'multiplication' : 
                alert(number1*number2);
                break;
            case 'division' : 
                alert(number1/number2);
                break;
            default : 
                alert("Retry!");
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
