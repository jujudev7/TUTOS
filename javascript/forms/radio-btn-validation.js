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
  // Récupérer les valeurs des champs
  const location = document.querySelector('input[name="location"]:checked');

  const checkboxIcons = document.querySelectorAll(".checkbox-icon");

  const errorLocation = document.getElementById("error-location");

  let isValid = true;

  if (location == null) {
    errorLocation.textContent = "Veuillez choisir une ville svp";

    for (let i = 0; i < checkboxIcons.length; i++) {
      checkboxIcons[i].style.border = "2px solid red";
    }
  } else {
    errorLocation.textContent = "";
    for (let i = 0; i < checkboxIcons.length; i++) {
      checkboxIcons[i].style.border = "";
    }
  }

  return isValid;
}
