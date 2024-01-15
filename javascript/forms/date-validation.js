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

function validate() {
  // Validation de la date de naissance

  // Récupérer la valeur de la date de naissance depuis le champ de saisie
  var birthdateInput = document.getElementById("birthdate").value;

  // Vérifier si une date a été saisie
  if (birthdateInput) {
    // Créer un objet Date à partir de la chaîne de date saisie
    var birthdate = new Date(birthdateInput);

    // Vérifier si la date est valide
    if (!isNaN(birthdate.getTime())) {
      // Calculer l'âge de l'utilisateur
      var age = calculateAge(birthdate);

      // Vérifier si l'utilisateur a plus de 18 ans
      if (age >= 18) {
        alert("Vous avez plus de 18 ans.");
      } else {
        alert("Vous n'avez pas encore 18 ans.");
      }
    } else {
      alert("Veuillez entrer une date de naissance valide.");
    }
  } else {
    alert("Veuillez entrer votre date de naissance.");
  }
}

function calculateAge(birthdate) {
  var currentDate = new Date();
  var age = currentDate.getFullYear() - birthdate.getFullYear();

  // Vérifier si l'anniversaire de l'utilisateur n'a pas encore eu lieu cette année
  if (
    currentDate.getMonth() < birthdate.getMonth() ||
    (currentDate.getMonth() === birthdate.getMonth() &&
      currentDate.getDate() < birthdate.getDate())
  ) {
    age--;
  }

  return age;
}
