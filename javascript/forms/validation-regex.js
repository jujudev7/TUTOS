let form = document.querySelector("form");
let champNom = document.getElementById("nom");
let champEmail = document.getElementById("email");

function verifierChamp(champ) {
  if (champ.value === "") {
    champ.classList.add("error");
  } else {
    champ.classList.remove("error");
  }
}

function verifierEmail(champ) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (emailRegExp.test(champ.value)) {
    champ.classList.remove("error");
  } else {
    champ.classList.add("error");
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  verifierChamp(champNom);
  verifierEmail(champEmail);
});

champNom.addEventListener("change", () => {
  verifierChamp(champNom);
});

champEmail.addEventListener("change", () => {
    verifierChamp(champEmail);
  });

// https://regex101.com/
// https://regexper.com/

// Pour tester des adresses email 
// david@openclassrooms.com 
// david.pierru@openclassrooms.com
// david-pierru@open-classrooms.com
// david.openclassrooms.com 
// david@openclassrooms 