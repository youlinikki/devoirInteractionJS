/*code récupérant le bouton du menu en vue ordinateur. Si celui ci est cliqué, 
la classe open est donné ou retiré au menu déroulant*/
console.log("a")
let boutton = document.getElementById("boutonmenu");
boutton.addEventListener("click", function () {
  let menuDeroulant = document.querySelector("#menu-deroulant");
  if (boutton.innerHTML=="X"){boutton.innerHTML="&#9776;";}else{boutton.innerHTML="X";}
  
  menuDeroulant.classList.toggle("open");
});

/*code récupérant le bouton du menu en vue téléphone. Si celui ci est cliqué, 
la classe open est donné ou retiré au menu déroulant*/

let miniboutton = document.getElementById("miniboutonmenu");
miniboutton.addEventListener("click", function () {
  let minimenuDeroulant = document.querySelector("#minimenu-deroulant");
  if (miniboutton.innerHTML=="X"){miniboutton.innerHTML="&#9776;";}else{miniboutton.innerHTML="X";}
  
  minimenuDeroulant.classList.toggle("open");
});
