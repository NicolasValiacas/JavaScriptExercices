/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var btn=document.getElementById("run");
    var dateJour=new Date();
    var aujourdhui=dateJour.getDate();
    var moisAct=dateJour.getMonth();
    var AnneeAct=dateJour.getFullYear();

    btn.addEventListener("click", function(){
        var inputJour=document.getElementById("dob-day").value;
        var inputMois=document.getElementById("dob-month").Value;
        var inputAnnee=document.getElementById("dob-year").value;

        var Ans=AnneeAct-inputAnnee;
        var mois=moisAct-inputMois;
        console.log(aujourdhui,inputJour);

        if(aujourdhui<inputJour){
            document.write("Vous avez " + Ans + " ans et " + mois + " mois ");
        } else {
            document.write("Vous avez " + Ans + " ans et " + (mois+1) + " mois ");
        }
    })
})();
