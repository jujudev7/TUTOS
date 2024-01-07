/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.
 *
 *********************************************************************************/

// Déclaration des tableaux contenant les listes des mots et des phrases proposées à l'utilisateur
const listeMots = ["Cachalot", "Pétunia", "Serviette"];
const listePhrases = [
  "Pas de panique !",
  "La vie, l'univers et le reste",
  "Merci pour le poisson",
];

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */

/**
 * Cette fonction construit et affiche l'email.
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score.
 */
function afficherEmail(nom, email, score) {
  let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`;
  location.href = mailto;
}

/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} nom
 * @throws {Error}
 */
function validerNom(nom) {
  if (nom.length < 2) {
    throw new Error("Nom trop court");
  }
}

/**
 * Cette fonction prend un email en paramètre et valide qu'il est au bon format.
 * @param {string} email
 * @throws {Error}
 */
function validerEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (!emailRegExp.test(email)) {
    throw new Error("Email non valide");
  }
}

/**
 * Cette fonction affiche le message d'erreur passé en paramètre.
 * Si le span existe déjà, alors il est réutilisé pour ne pas multiplier
 * les messages d'erreurs.
 * @param {string} message
 */
function afficherMessageErreur(message) {
  let spanErreurMessage = document.getElementById("erreurMessage");

  if (!spanErreurMessage) {
    // si spanErreurMessage n'existe pas, on va le créer
    let popup = document.querySelector(".popup");
    spanErreurMessage = document.createElement("span");
    spanErreurMessage.id = "erreurMessage";

    popup.append(spanErreurMessage);
  }

  spanErreurMessage.innerText = message;
}

/**
 * Cette fonction permet de récupérer les informations dans le formulaire
 * de la popup de partage et d'appeler l'affichage de l'email avec les bons paramètres.
 * @param {string} scoreEmail
 */
function gererFormulaire(scoreEmail) {
  try {
    let baliseNom = document.getElementById("nom");
    let nom = baliseNom.value;
    validerNom(nom);

    let baliseEmail = document.getElementById("email");
    let email = baliseEmail.value;
    validerEmail(email);
    afficherMessageErreur("");
    afficherEmail(nom, email, scoreEmail);
  } catch (erreur) {
    afficherMessageErreur(erreur.message);
  }
}

/**
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
  // Initialisations
  initAddEventListenerPopup();
  let score = 0;
  let i = 0;
  let listeProposition = listeMots;

  // Gestion de l'événement change sur les boutons radios.
  let listeBtnRadio = document.querySelectorAll(".optionSource input");
  for (let index = 0; index < listeBtnRadio.length; index++) {
    listeBtnRadio[index].addEventListener("change", (event) => {
      // Si c'est le premier élément qui a été modifié, alors nous voulons
      // jouer avec la listeMots.
      if (event.target.value === "1") {
        listeProposition = listeMots;
      } else {
        // Sinon nous voulons jouer avec la liste des phrases
        listeProposition = listePhrases;
      }
      // Et on modifie l'affichage en direct.
      afficherProposition(listeProposition[i]);
    });
  }

  // Gestion de l'événement submit sur le formulaire de partage.
  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let scoreEmail = `${score} / ${i}`;
    gererFormulaire(scoreEmail);
  });
}

///////////////////////////////////////////////////////////
////                      POP UP                  /////////
///////////////////////////////////////////////////////////

/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires à l'affichage et à la
 * fermeture de la popup de partage.
 *
 *********************************************************************************/

/**
 * Cette fonction affiche la popup pour partager son score.
 */
function afficherPopup() {
  let popupBackground = document.querySelector(".popupBackground");
  // La popup est masquée par défaut (display:none), ajouter la classe "active"
  // va changer son display et la rendre visible.
  popupBackground.classList.add("active");
}

/**
 * Cette fonction cache la popup pour partager son score.
 */
function cacherPopup() {
  let popupBackground = document.querySelector(".popupBackground");
  // La popup est masquée par défaut (display:none), supprimer la classe "active"
  // va rétablir cet affichage par défaut.
  popupBackground.classList.remove("active");
}

/**
 * Cette fonction initialise les écouteurs d'événements qui concernent
 * l'affichage de la popup.
 */
function initAddEventListenerPopup() {
  // On écoute le click sur le bouton "partager"
  btnPartage = document.querySelector(".zonePartage button");
  let popupBackground = document.querySelector(".popupBackground");
  btnPartage.addEventListener("click", () => {
    // Quand on a cliqué sur le bouton partagé, on affiche la popup
    afficherPopup();
  });

  // On écoute le click sur la div "popupBackground"
  popupBackground.addEventListener("click", (event) => {
    // Si on a cliqué précisément sur la popupBackground
    // (et pas un autre élément qui se trouve dedant)
    if (event.target === popupBackground) {
      // Alors on cache la popup
      cacherPopup();
    }
  });
}

lancerJeu();
