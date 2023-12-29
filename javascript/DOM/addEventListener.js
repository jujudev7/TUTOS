// on cible l'élément monBouton
let monBouton = document.getElementById("monBouton");

// monBouton.addEventListener("click", function () {
//   console.log("Vous avez cliqué sur le bouton");
// });

// fonction fléchée on écoute quand on clique sur le bouton
monBouton.addEventListener("click", () => {
  console.log("Vous avez cliqué sur le bouton");
});

// on récupère la touche sur laquelle l'utilisateur a appuyé
document.addEventListener('keypress', (event) => {
    console.log(event.key);
});

// • event.target : renvoie l’élément HTML qui a déclenché l’événement ;
// • event.key : la touche appuyée quand l’événement écouté est lié au clavier ;
// • event.clientX et event.clientY : les coordonnées de la souris quand l’événement écouté est lié à la souris.