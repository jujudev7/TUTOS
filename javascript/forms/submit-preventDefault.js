const form = document.querySelector('form');

// Quand on submit
form.addEventListener("submit", (event) => {
    // On empêche le comportement par défaut
    event.preventDefault();
    console.log("Il n’y a pas eu de rechargement de page");
});

form.addEventListener("submit", (event) => {
    // On empêche le comportement par défaut
    event.preventDefault();
    console.log("Il n’y a pas eu de rechargement de page");

    // On récupère les 2 champs et on affiche leur valeur
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    console.log(nom);
    console.log(email);
});