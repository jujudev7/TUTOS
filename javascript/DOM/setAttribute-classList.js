
// Pour modifier un élément du DOM, JavaScript propose de nombreuses méthodes, ex:
//     • setAttribute : méthode la plus générique, qui permet de spécifier n’importe quel attribut ;
//     • classList : propriété spécifique qui permet de modifier des classes.
    
let baliseImage = document.getElementById("premiereImage"); // on cible l'image via son id premiereImage
baliseImage.setAttribute("alt", "Ceci est une image de test modifiée"); // on modifie la balise alt de l'image
baliseImage.src = "cheminImage.jpg"; // on modifier la source de l'image
baliseImage.classList.add("nouvelleClasse") // on ajoute une nouvelle classe à l'image
baliseImage.classList.remove("photo") // on supprime la classe photo de l'image