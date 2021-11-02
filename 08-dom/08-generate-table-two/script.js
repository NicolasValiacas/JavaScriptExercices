/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var cible=document.getElementById('target');
    var table=document.createElement('table');
    table.setAttribute('id', 'table');
    cible.appendChild(table);
    var nombre=0;

    for(i=0; i<10; i++){
        var tab=document.getElementById('table');
        var TLigne=document.createElement('tr');
        tab.appendChild(TLigne);
        var TCol=document.createElement('th');
        TCol.innerHTML="Table de "+(nombre+1);
        TLigne.appendChild(TCol);

        function table(nombre){
            for(j=1; j<11; j++){
                var createTr=document.createElement('tr');
                tab.appendChild(createTr);
                var createTd=document.createElement('td');
                createTd.innerHTML=j+"x"+nombre+"="+nombre*j;
                createTr.appendChild(createTd);
            }
        }
        nombre++;
        table(nombre);
    }
})();
