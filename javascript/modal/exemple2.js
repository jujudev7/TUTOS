// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelector(".modal-btn");
const modalClose = document.querySelector(".close"); // we select the close btn (x)

// launch modal event
modalBtn.addEventListener("click", launchModal); 

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
