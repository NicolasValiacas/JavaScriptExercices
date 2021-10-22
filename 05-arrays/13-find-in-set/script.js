/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = new Set([
        "Nicolas",
        "Anthony",
        "Leny",
        "Alexandre",
        "Eric",
        "Caroline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    let btn=document.getElementById('run'); 

    btn.addEventListener('click', function(){
        console.log(people.size + " personnes sont présentes dans le tableau.");
        if(people.has('Alexandre')==true){
            console.log("Il est laaaaaaaaaa!!!!! Le beau gosse, alexandre!")
        } else {
            console.log("Il est ou Alex ??? Trouvez le moi avant que je le frappe!");
        }
    })
})();
