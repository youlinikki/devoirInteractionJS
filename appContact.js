let form = document.querySelector("#my-form");
let email = document.querySelector("#email");
let nom = document.querySelector("#nom");
let ville = document.querySelector("#ville");
let pays = document.querySelector("#pays");
let prenom = document.querySelector("#prenom");
let codePostal = document.querySelector("#codePostal");
let mdp = document.querySelector("#mdp");
let mdpconfirmation = document.querySelector("#mdpconfirmation");
let condu = document.querySelector("#condu");
let errors = document.querySelector("#errors");
let body = document.querySelector("body");


form.addEventListener("submit", function (event) {

  event.preventDefault();
  errors.innerHTML = "";

  if (nom.value.length < 2) {
    nom.style.backgroundColor = "red";
    errors.innerHTML += "<div> Veuillez renseigner un nom avec 2 caractères minimum. </div>";
}else {
  nom.style.backgroundColor = "green";
}

if (ville.value.length < 2) {
  ville.style.backgroundColor = "red";
  errors.innerHTML += "<div> Veuillez renseigner une ville avec 2 caractères minimum. </div>";
}else {
ville.style.backgroundColor = "green";
}

if (prenom.value.length < 2) {
  prenom.style.backgroundColor = "red";
  errors.innerHTML += "<div> Veuillez renseigner un prénom avec 2 caractères minimum. </div>";
}else {
prenom.style.backgroundColor = "green";
}

if (adresse.value.length < 2) {
  adresse.style.backgroundColor = "red";
  errors.innerHTML += "<div> Veuillez renseigner une adresse avec 2 caractères minimum. </div>";
}else {
adresse.style.backgroundColor = "green";
}

if(pays.value == "selectionner") {
  pays.style.backgroundColor = "red";
  errors.innerHTML += "<div> Veuillez sélectionner un pays. </div>";
} else {
  pays.style.backgroundColor = "green";
}

if(email.value.includes("@") != true) {
  email.style.backgroundColor = "red";
  errors.innerHTML += "<div> Veuillez entrer un email valide. </div>";
} else {
  email.style.backgroundColor = "green";
}

if (codePostal.value.length < 5 || codePostal.value.length > 5) {
  codePostal.style.backgroundColor = "red";
  errors.innerHTML += "<div> Veuillez renseigner un code postal de 5 chiffres. </div>";
} else {
  codePostal.style.backgroundColor = "green";
}

if (condu.checked==false) {
  condu.style.backgroundColor = "red";
  errors.innerHTML += "<div> Veuillez accepter les conditions d'utilisation. </div>";
} else {
  condu.style.backgroundColor = "green";
}


if (mdp.value != mdpconfirmation.value) {
  mdp.style.backgroundColor = "red";
  mdpconfirmation.style.backgroundColor = "red";
  errors.innerHTML += "<div> Vérifiez que vous avez bien entré deux fois le même mot de passe. </div>";
} else {
  mdp.style.backgroundColor = "green";
  mdpconfirmation.style.backgroundColor = "green";
}

if (errors.innerHTML === "") {
  let p = document.createElement("p"); // créer un p en JS
  p.append("Formulaire envoyé !"); // ajouter du texte à mon p
  body.appendChild(p); // ajouter l p au DOM
  form.style.display = "none";
}






});