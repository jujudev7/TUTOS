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
  if (validate()) {
    closeModal();
  }
});

function validate() {
  const checkbox1 = document.getElementById("checkbox1").checked;

  const inputCheckbox1 = document.querySelector(".cgu .checkbox-icon");

  const errorCgu = document.getElementById("error-cgu");

  let isValid = true;

  // Validation de la case à cocher des conditions d'utilisation
  if (!checkbox1) {
    errorCgu.textContent = "Veuillez accepter les conditions d'utilisation svp";
    inputCheckbox1.style.border = "2px solid red";
    isValid = false;
  } else {
    errorCgu.textContent = "";
    inputCheckbox1.style.border = "2px solid rgb(0, 255, 21)";
  }

  // Si toutes les validations sont passées, le formulaire est valide
  return isValid;
}
