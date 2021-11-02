/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var image=document.querySelector('figure img');
    var DataImg=img.getAttribute('data-hover');
    image.addEventListener('mouseover', function(event){
        image.setAttribute('src', DataImg);
    })
})();
