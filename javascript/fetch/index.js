async function fetchPhotographers() {
    console.log("00000000002 :");
  const response = await fetch("photographers.json");
  if (response.ok === true) {
    return response.json();
  }
  throw new Error("Impossible de contacter le serveur");
}

async function init() {
  console.log("00000000001 :");
  fetchPhotographers().then((photographers) => {
    console.log("00000000003 :" + photographers);
    console.log("00000000004 :" + JSON.stringify(photographers));
  });
}

init();

// Utilisation de l'API Fetch pour récupérer des données à partir d'un fichier JSON local, 
// puis afficher ces données dans la console du navigateur.

// 1. La fonction fetchPhotographers est définie comme une fonction asynchrone (async function). Cette fonction est chargée de récupérer les données des photographes à partir d'un fichier JSON local nommé photographers.json. Elle utilise l'API Fetch pour effectuer une requête HTTP asynchrone.

// 2. Dans la fonction fetchPhotographers, la méthode fetch est utilisée pour récupérer les données du fichier JSON. Elle attend la réponse à l'aide de l'opérateur await, ce qui signifie que la fonction va attendre que la requête soit terminée avant de continuer son exécution. La réponse est stockée dans la variable response.

// 3. Ensuite, la fonction vérifie si la réponse est réussie (response.ok === true). Si c'est le cas, cela signifie que la requête a abouti. La fonction utilise alors la méthode json() de l'objet response pour extraire et retourner les données JSON. Sinon, elle lance une erreur avec le message "Impossible de contacter le serveur".

// 4. La fonction init est également définie comme une fonction asynchrone. Dans cette fonction, elle appelle la fonction fetchPhotographers pour récupérer les données des photographes. Elle utilise ensuite la méthode then() pour attacher une fonction de rappel qui sera exécutée une fois que les données des photographes seront disponibles.

// 5. À l'intérieur de la fonction de rappel passée à then(), les données des photographes sont affichées dans la console à l'aide de console.log(). Cependant, remarquez que les données sont affichées deux fois : une fois en tant qu'objet JavaScript (photographers), et une fois en tant que chaîne JSON à l'aide de JSON.stringify().

// 6. Enfin, la fonction init() est appelée pour démarrer le processus de récupération des données des photographes.

// En résumé, ce code illustre comment utiliser Fetch pour récupérer des données JSON à partir d'un fichier local, et comment gérer les résultats de manière asynchrone en utilisant des fonctions asynchrones et des promesses.