const gallery = document.getElementById("gallery");
let currentIndex = 0; // Déclaration de currentIndex à un niveau supérieur
let players = []; // Déclaration de players à un niveau supérieur

// on importe les données des photographes depuis le fichier JSON
async function getPlayers() {
  const response = await fetch("players.json");
  if (response.ok === true) {
    const data = await response.json();
    return data.players;
  }
  throw new Error("Impossible de récupérer les données des joueurs");
}

// Fonction pour créer une image et ajouter un événement de clic pour afficher la lightbox
function createImageWithClickEvent(player, index) {
  const img = document.createElement("img");
  img.src = "images/" + player.image;
  img.alt = player.name;
  img.addEventListener("click", () => {
    openLightbox(player, index);
  });
  return img;
}

// Fonction pour afficher les joueurs
async function displayPlayers() {
  try {
    players = await getPlayers(); // Assignation des données des joueurs à la variable players
    // Parcourir le tableau d'objets et créer des éléments <img> pour chaque joueur
    players.forEach((player, index) => {
      const img = createImageWithClickEvent(player, index);
      gallery.appendChild(img);
    });
  } catch (error) {
    console.error(error.message);
  }
}

// Fonction pour ouvrir la lightbox avec l'image du joueur
function openLightbox(player) {
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.innerHTML = ""; // Supprimer tout contenu précédent de la lightbox

  document.body.appendChild(lightbox);

  const contentLightbox = document.createElement("div");
  contentLightbox.id = "lightbox-content";

  const closeButton = document.createElement("button");
  closeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  closeButton.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = "images/" + player.image;
  img.alt = player.name;
  
  const caption = document.createElement("h2");
  caption.textContent = player.name + " (" + player.club + ")";

  const prevButton = document.createElement("button");
  prevButton.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
  prevButton.addEventListener("click", () => {
    navigateLightbox(-1);
  });

  const nextButton = document.createElement("button");
  nextButton.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
  nextButton.addEventListener("click", () => {
    navigateLightbox(1);
  });

  function navigateLightbox(direction) {
    // Mettre à jour l'index de l'image actuelle en fonction de la direction
    currentIndex += direction;

    // Vérifier si l'index est supérieur au nombre total d'images
    if (currentIndex >= players.length) {
      currentIndex = 0; // Revenir à la première image si on dépasse la dernière
    }

    // Vérifier si l'index est inférieur à zéro
    if (currentIndex < 0) {
      currentIndex = players.length - 1; // Aller à la dernière image si on dépasse la première
    }

    // Récupérer les données du joueur correspondant à l'index actuel
    const currentPlayer = players[currentIndex];

    // Mettre à jour l'image et la légende dans la lightbox
    img.src = "images/" + currentPlayer.image;
    img.alt = currentPlayer.name;
    caption.textContent = currentPlayer.name + " (" + currentPlayer.club + ")";
  }

  contentLightbox.appendChild(prevButton);
  contentLightbox.appendChild(figure);
  figure.appendChild(img);
  figure.appendChild(caption);
  contentLightbox.appendChild(nextButton);
  contentLightbox.appendChild(closeButton);
  lightbox.appendChild(contentLightbox);

  lightbox.classList.add("active");
}

// Appeler la fonction pour afficher les joueurs
displayPlayers();
