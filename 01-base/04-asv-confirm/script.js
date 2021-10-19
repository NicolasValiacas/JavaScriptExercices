/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var âge=prompt("Quel age as-tu?");
    var sexe=prompt("Quel est ton sexe?");
    var ville=prompt("De quelle ville viens-tu?")

    var conf=confirm("Les informations sont: " + "\n Votre âge: " + âge + " \n Votre sexe: " + sexe + "\n Votre ville: " + ville + "\n Si ces informations sont corrects, appuyez sur OK, dans le cas contraire appuyez sur ANNULER!");

    if (conf==false){
        window.location.reload()
    }
})();
