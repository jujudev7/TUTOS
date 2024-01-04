let nom = document.getElementById("nom");
console.log(nom.value);

let conditions = document.getElementById("conditions");
console.log(conditions.checked);

nom.addEventListener("change", () => {
  console.log(nom.value); // On récupère en console le nouveau nom dès que celui change
});

// Sélection du bouton radio déjà coché
const checkedRadioButton = document.querySelector('.residence input:checked');

// Affichage de la valeur initiale du bouton radio déjà coché dans la console
console.log(checkedRadioButton.value);

// Sélection de tous les boutons radio
const radioButtons = document.querySelectorAll('.residence input');

// Ajout d'un événement "change" à chaque bouton radio
radioButtons.forEach(button => {
    button.addEventListener('change', function() {
        if (this.checked) {
            console.log(this.value); // Affiche la valeur du bouton radio sélectionné après le changement
        }
    });
});