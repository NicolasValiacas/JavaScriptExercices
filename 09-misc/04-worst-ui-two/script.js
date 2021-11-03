/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let btn1=document.getElementById('part-one');
    let btn2=document.getElementById('part-two');
    let btn3=document.getElementById('part-three');
    let btn4=document.getElementById('part-four');

    let DataMin1=btn1.getAttribute('data-min');
    let DataMax1=btn1.getAttribute('data-max');
    let numValue=document.getElementById('target');

    btn1.addEventListener('click', () =>{
        if(DataMin1>DataMax1){
            DataMin1=460;
        }else{
            DataMin1++;
            numValue.textContent="+"+DataMin1;
        }
    })

    let DataMin2=btn2.getAttribute('data-min');
    let DataMax2=btn2.getAttribute('data-max');

    btn2.addEventListener('click', () =>{
        if(DataMin2>DataMax2){
            DataMin2=00;
        } else if(DataMin2>=0 && DataMin2<9){
            DataMin2++;
            numValue.textContent="+" + DataMin1.toString()+" " + (0+DataMin2.toString());
        }else{
            DataMin2++;
            numValue.textContent="+" + DataMin1.toString()+" " +DataMin2.toString();
        }
    })

    let DataMin3=btn3.getAttribute('data-min');
    let DataMax3=btn3.getAttribute('data-max');

    btn3.addEventListener('click', () =>{
        if(DataMin3>DataMax3){
            DataMin3=00;
        }else if(DataMin3>=0 && DataMin3<9){
            DataMin3++;
            numValue.textContent="+" + DataMin1.toString()+ " " + DataMin2.toString()+ " " +(0+DataMin3.toString());
        }else{
            DataMin3++;
            numValue.textContent="+" + DataMin1.toString()+ " " + DataMin2.toString()+ " " + DataMin3.toString();
        }
    })

    let DataMin4=btn4.getAttribute('data-min');
    let DataMax4=btn4.getAttribute('data-max');

    btn4.addEventListener('click', () =>{
        if(DataMin4>DataMax4){
            DataMin4=00;
        } else if (DataMin4>=0 && DataMin4<9){
            DataMin4++;
            numValue.textContent="+" + DataMin1.toString()+" " + DataMin2.toString() + " " + DataMin3.toString() + " " +(0+DataMin4.toString());
        } else {
            DataMin4++;
            numValue.textContent="+" + DataMin1.toString() + " " +DataMin2.toString() + " " + DataMin3.toString() + " " + DataMin4.toString();
        } 
    })
})();
