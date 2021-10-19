/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var réponse=prompt ('Voulez-vous un morceau de gâteau?');

    if (réponse=='Oui'){
        alert ('Voilà un morceaux de gâteau BG! Tu le mérite!');
    }
    else {
        alert ("Mais t'es pas net, un morceau de gâteau ca ne se refuse pas enfin!")
    }
})();
