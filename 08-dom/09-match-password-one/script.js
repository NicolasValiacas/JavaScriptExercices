/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var btn=document.getElementById('run');
    
    btn.addEventListener('click', function(){
        var mdp1=document.getElementById('pass-one').value;
        var mdp2=document.getElementById('pass-two').value;
        var input1=document.getElementById('pass-one');
        var input2=document.getElementById('pass-two');

        if(mdp1===mdp2){
            input1.setAttribute('style', 'border-color:green');
            input2.setAttribute('style', 'border-color:green');
        }else{
            input1.setAttribute('style', 'border-color:red');
            input2.setAttribute('style', 'border-color:red');
        }
    })
})();
