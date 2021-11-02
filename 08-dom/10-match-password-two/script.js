/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var btn=document.getElementById('run');
    btn.addEventListener('click', function (){
        var mdp1=document.getElementById('pass-one').value;
        var mdp2=document.getElementById('pass-two').value;
        var input1=document.getElementById('pass-one');
        var input2=document.getElementById('pass-two');

        if(mdp1===mdp2){
            console.log('Mot de passe correct');
        } else {
            input1.classList.add('Réessayez');
            input2.classList.add('Réessayez');
        }
        console.log(input1,input2);     
    })
})();
