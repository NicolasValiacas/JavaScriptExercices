/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let btn=document.getElementById('run');

    btn.addEventListener('click', function (){
        let Valeur=new Object();

        Valeur.firstname="Nicolas";
        Valeur.lastname="Valiacas";
        Valeur.age=27; 
        Valeur.city="Bruxelles (Uccle)";
        Valeur.country="Belgique";

        console.log(Valeur);
    })
})();
