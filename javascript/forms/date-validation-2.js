function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close"); // we select the close btn (x)

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

// close modal event
modalClose.addEventListener("click", closeModal); // we add en event on click for close btn with addEventListener()

// close modal function
function closeModal() {
  modalBg.style.display = "none";
} // we create the function closeModal() to modify display property for hiding the modal

const form = document.querySelector("form");

// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
  // On empêche le comportement par défaut
  event.preventDefault();
});

// function calculateAge(birthdateUser) {
//   const currentDate = new Date();
//   const age = currentDate.getFullYear() - birthdateUser.getFullYear();

//   // Vérifier si l'anniversaire de l'utilisateur n'a pas encore eu lieu cette année
//   if (
//     currentDate.getMonth() < birthdateUser.getMonth() ||
//     (currentDate.getMonth() === birthdateUser.getMonth() &&
//       currentDate.getDate() < birthdateUser.getDate())
//   ) {
//     age--;
//   }

//   return age;
// }

function validate() {
  let isValid = true;

  // Validation de la date de naissance
  // Récupérer la valeur de la date de naissance depuis le champ de saisie
  const birthdate = document.getElementById("birthdate").value;

  const inputBirthdate = document.getElementById("birthdate");

  const errorBirthdate = document.getElementById("error-birthdate");
  const birthdateUser = new Date(birthdate);
 
  const today = new Date();
  const thirteenYearsAgo = new Date();
  thirteenYearsAgo.setFullYear(today.getFullYear() - 13);
  const _123YearsAgo = new Date();
  _123YearsAgo.setFullYear(today.getFullYear() - 123);

  // const age = calculateAge(birthdateUser);

  if (birthdate == "" || birthdate == null) {
    errorBirthdate.textContent = "Veuillez entrer votre date de naissance svp";
    inputBirthdate.classList.add("invalid");
    inputBirthdate.classList.remove("valid");
    isValid = false;
  } else if (birthdateUser < _123YearsAgo) {
    errorBirthdate.textContent =
      "Veuillez entrer une date de naissance valide svp";
    inputBirthdate.classList.add("invalid");
    inputBirthdate.classList.remove("valid");
    isValid = false;
  } else if (birthdateUser > thirteenYearsAgo) {
    errorBirthdate.textContent =
      "Désolé, vous n'avez pas l'âge requis pour participer !";
    inputBirthdate.classList.add("invalid");
    inputBirthdate.classList.remove("valid");
    isValid = false;
  } else if (birthdateUser >= _123YearsAgo && birthdateUser <= thirteenYearsAgo) {
    errorBirthdate.textContent = "";
    inputBirthdate.classList.add("valid");
    inputBirthdate.classList.remove("invalid");
  }

  return isValid;
}
