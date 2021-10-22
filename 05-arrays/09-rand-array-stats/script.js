/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let btn=document.getElementById('run');
    let btnMax=document.getElementById('max');
    let btnMin=document.getElementById('min');
    let btnSomme=document.getElementById('sum');
    let btnMoyenne=document.getElementById('average');
    let tabAleatoire=[];
    let nombreMin;

    function randomNumbers(){
        let min=1;
        let max=100;
        let nombre=Math.floor(Math.random() * (max-min))+min;
        tabAleatoire.push(nombre);
        return nombre;
    }

    btn.addEventListener('click', function(){
        for(i=1; i<=10; i++){
            var tab=document.getElementById('n-'+i);
            tab.innerHTML=randomNumbers();
        }

        btnMax.innerHTML=Math.max(...tabAleatoire);
        btnMin.innerHTML=Math.min(...tabAleatoire);

        let addition=(previousValue, currentValue) => previousValue+currentValue;
        btnSomme
    })
})();
