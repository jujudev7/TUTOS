const form = document.querySelector("form");

// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
  // On empêche le comportement par défaut
  event.preventDefault();

  // On fait la vérification.
      const baliseNom = document.getElementById('nom');
      const valeurNom = baliseNom.value;
      if (valeurNom === "") {
          console.log('Le champ nom est vide');
      } else {
          console.log('Le champ nom est rempli');
      }
  });


