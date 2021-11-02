/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var btn=document.getElementById('run');

    class Personne{
        constructor(firstname,lastname){
            this.firstname=firstname;
            this.lastname=lastname;
        }

        get fullname(){
        return `${this.firstname} ${this.lastname}`;
        }

        set fullname(value){
        [this.firstname, this.lastname]=value.split(" ");
        }
    }

    btn.addEventListener('click', () => {
        var Pers=new Personne('Nicolas', 'Valiacas');
        console.log(test.fullname);
        var Pers1=new Personne('Steeve', 'Maccouille');
        console.log(Pers1.fullname);
    })


})();
