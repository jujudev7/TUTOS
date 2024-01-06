const baliseNom = document.getElementById("nom");
baliseNom.addEventListener("change", (event) => {
  const valeurNom = event.target.value;
  if (valeurNom === "") {
    console.log("Le champ nom est vide");
  } else {
    console.log("Le champ nom est rempli");
  }
});