# Interagir avec un élément d’une page web grâce aux événements

## Découvrir la programmation événementielle

Jusqu’à présent, notre code s’est toujours exécuté de manière séquentielle : d’abord la première instruction, puis la seconde, et ainsi de suite jusqu’à ce que toutes les instructions aient été exécutées. Dans ce chapitre, nous allons aborder une nouvelle manière d’envisager la programmation, avec la **programmation événementielle**.

Un **événement** correspond à une action spécifique, comme par exemple le clic sur un bouton, ou la frappe d’un clavier. Ainsi, la programmation événementielle consiste à réagir à ces événements et exécuter du code au moment où ces événements se produisent.

Pour implémenter cela, nous devons d’abord dire à JavaScript de les écouter grâce à un eventListener, littéralement un **“écouteur d’évènement”**, en français. Puis, nous devons lier l’événement à un bloc de code.

## Écouter un événement avec addEventListener

**AddEventListener** est une méthode fournie par JavaScript, qui peut être appelée directement depuis les éléments HTML. Cette méthode prend 2 paramètres :   
    • le nom de l’événement, comme click, par exemple ;
    • une fonction. 
La fonction peut s’écrire de deux manières différentes que nous allons voir :
    • les fonctions classiques avec le mot-clé function ;
    • les fonctions fléchées. 
Utiliser addEventListener avec le mot-clé function
Prenons un exemple très simple pour illustrer ceci. Créons un bouton dans un fichier HTML :
```
<button id="monBouton">Cliquez-moi !</button>
```
Dans le fichier JavaScript, nous allons récupérer ce bouton et ajouter un écouteur :
```
    let monBouton = document.getElementById("monBouton");
    monBouton.addEventListener("click", function () {
        console.log("Vous avez cliqué sur le bouton")
    });
```
D’abord nous récupérons monBouton, jusqu’ici, pas de souci. Ensuite, nous définissons une fonction avec le mot-clé **function**.
Cette fonction n’a pas de nom, c’est ce qu’on appelle une **fonction anonyme**. Elle est créée au moment où nous faisons notre **addEventListener**.

Si nous exécutons ce code, le **console.log** ne s’affichera pas, car nous avons simplement ajouté un écouteur d’événement. Nous avons dit à ce dernier :   
*“Lorsque l’événement click se produit sur monBouton, alors tu vas exécuter la fonction que je te donne”.*

Par conséquent, tant qu’on ne clique pas sur le bouton, il ne se passe rien. En revanche, le console.log apparaîtra à l’instant où on cliquera dessus.
Ainsi, gardez bien en tête que, une fois que l’addEventListener est exécuté, la fonction passée en paramètre ne se lance pas immédiatement. Cette dernière sera lancée :  
    • au moment où l'événement qu’on écoute (ici, un click sur monBouton) se produit ;  
    • autant de fois que l’événement se produit (si on clique dix fois, nous verrons dix fois le message).

## Utilisez addEventListener avec une fonction fléchée
Dans l’exemple précédent, pour créer une fonction nous avons utilisé le mot-clé function. Cependant, pour corriger certains soucis notamment liés à la manipulation des objets et à la performance, JavaScript a introduit une autre notation : **les fonctions fléchées**.

Exemple d’addEventListener où le second argument, qui est la fonction qui sera exécutée lorsque l’événement se produit, est écrit avec une fonction fléchée :
```
monBouton.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton")
});
```
Dans le code ci-dessus :  
    • le mot **function** est remplacé par des parenthèses vides ;   
    • une **flèche** apparaît entre les parenthèses et les accolades (d’où le nom de fonction fléchée !)

En dépit de ces modifications, le fonctionnement reste le même. La fonction fléchée sera appelée à chaque fois que l’utilisateur va cliquer sur monBouton.

Les deux notations, fonction fléchée et function, sont très utilisées. Cependant, pour la suite du cours, je vais privilégier la notation avec les fonctions fléchées. 

## Pour aller plus loin : Récupérer les informations sur un événement avec la variable “event”

Il arrive régulièrement que l’on souhaite avoir des informations sur l’événement qui vient de se dérouler. Par exemple :  
    • Sur quel élément l’utilisateur a-t-il cliqué ?  
    • Quelles étaient les coordonnées de la souris ?  
    • Sur quelle touche du clavier l’utilisateur a-t-il appuyé ?

Un exemple classique est la gestion du clavier. Lorsque l’on appuie sur une touche, l’événement appelé **keypress** se déclenche. Nous pourrions d’ailleurs l’utiliser dans notre application, par exemple, pour valider un mot lorsque l’on appuie sur la touche **Entrée**.

On peut écouter l’event grâce à addEventListener, mais comment savoir quelle touche a été pressée ?
```
document.addEventListener('keypress', (event) => {
    console.log(event.key);
});
```
Entre les parenthèses est apparue une nouvelle variable appelée event. Cette variable est fournie directement par JavaScript. C’est un objet qui contient toutes les informations liées à l’événement. Ici, ce code affiche dans la console toutes les touches sur lesquelles nous pressons.

N’hésitez pas à faire un console.log de event pour explorer un peu cette variable. JavaScript propose beaucoup d’informations pour parer à toutes les situations. Certaines d’entre elles sont particulièrement intéressantes :   
    • **event.target** : renvoie l’élément HTML qui a déclenché l’événement ;  
    • **event.key** : la touche appuyée quand l’événement écouté est lié au clavier ;  
    • **event.clientX et event.clientY** : les coordonnées de la souris quand l’événement écouté est lié à la souris.

```
 let btnValiderMot = document.getElementById("btnValiderMot"); 
// Ne pas oublier les guillemets dans les parenthèses !
 let inputEcriture = document.getElementById("inputEcriture"); 

btnValiderMot.addEventListener("click",() => { 
/	/ console.log("J'ai cliqué") 
	console.log(inputEcriture.value) // On récupère la valeur de l'input inputEcriture 
 }) 
```
É
```
function lancerJeu() {
  // Initialisations
  let score = 0;

  let btnValiderMot = document.getElementById("btnValiderMot"); // Ne pas oublier les guillemets dans les parenthèses !
  let inputEcriture = document.getElementById("inputEcriture");
  let i = 0;

  afficherProposition(listeMots[i]);

  btnValiderMot.addEventListener("click", () => {
    // console.log("J'ai cliqué")
    if (inputEcriture.value === listeMots[i]) { // si le mot écrit par l'utilisateur correspond bien au mot proposé, on augmente le score
      score++;
    }
    console.log(inputEcriture.value); // On récupère la valeur de l'input inputEcriture
    i++;
    afficherResultat(score, i);

    inputEcriture.value = ""; // on vide le champ d'écriture une fois validé
    if (listeMots[i] === undefined) {
      afficherProposition("Le jeu est fini !"); // si il n'y a plus de mot (= undefined), le jeu est fini
      btnValiderMot.disabled = true; // on désactive le bouton Valider
    } else {
      afficherProposition(listeMots[i]);
    }
  });
  afficherResultat(score, i);
}
```

## En résumé
    • La programmation événementielle consiste à écrire du code qui réagit à des événements.

    • Un événement est un signal envoyé par l’élément HTML lorsque l’utilisateur effectue une action (clic, frappe au clavier…).

    • Pour savoir quand un événement est envoyé, vous devez attacher un écouteur à l’élément HTML.

    • Pour gérer un événement, vous devez l’écouter en utilisant la méthode AddEventListener.

    • Vous pouvez récupérer des informations sur un événement en utilisant la variable event.
