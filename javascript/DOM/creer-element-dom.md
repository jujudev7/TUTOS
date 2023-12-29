# Créer un nouvel élément dans une page web

Pour créer nos éléments, JavaScript nous propose plusieurs manières de faire. Nous en aborderons deux dans ce chapitre :  
    • la méthode **createElement** ;  
    • la propriété **innerHTML**.   

## Créer une nouvelle balise grâce à createElement

### Utiliser la méthode CreateElement

**CreateElement est** une méthode fournie par JavaScript, accessible depuis document. Elle permet de créer n’importe quelle balise :
```
let nouvelElement = document.createElement("div");
```

Ici, on peut remplacer div par le nom de balise désirée, section, p, h1, etc. Une fois cette balise créée, vous pouvez la configurer avec des méthodes.

Dans nouvelElement, nous aurons un objet **HTMLElement** qui représente la balise que nous avons créée.

### Insérez une balise dans la page
Une fois l’élément créé, il n'apparaît pas encore dans la page. Pour que cette nouvelle balise apparaisse, nous devons l’insérer dans l’arbre DOM afin que JavaScript sache exactement à quel endroit il faudra mettre l’élément. Pour cela, nous devons :   
    • déterminer quel sera l’élément parent ;  
    • utiliser **appendChild** (littéralement en anglais : “ajouter un enfant”).
```
// Récupérer un élément parent existant
let parentElement = document.getElementById("conteneur");

// Ajouter le nouvel élément au parent
parentElement.appendChild(nouvelElement);
```
Ici, j’ai ajouté une balise div à un élément que j’ai récupéré grâce à **getElementById**.  
Il existe d’autres méthodes pour insérer des éléments dans l’arbre DOM, comme **prepend, before** ou **insertAdjacentElement**. N’hésitez pas à consulter la documentation pour en savoir plus.

## Utiliser la propriété innerHTML pour insérer du HTML
Avec la méthode **createElement**, nous créons un élément que nous pouvons modifier et insérer dans le HTML. Mais que se passe-t-il quand nous devons créer et imbriquer de nombreux éléments ?  
Regardons ensemble avec cet exemple plus complexe :
```
// Définition des variables contenant le texte du titre et du paragraphe
let contenuTitre = "Azertype"
let contenuParagraphe = "L'application pour apprendre à taper plus vite !"

// Création d'un div avec createElement. Dans cette div, on va créer un titre h1 et un paragraphe p
let nouvelleDiv = document.createElement("div")
let nouveauTitre = document.createElement("h1")
let nouveauParagraphe = document.createElement("p")

// On ajoute du texte dans le titre et le paragraphe
nouveauTitre.textContent = contenuTitre
nouveauParagraphe.textContent = contenuParagraphe

// On ajoute le titre et le paragraphe dans la div
nouvelleDiv.appendChild(nouveauTitre)
nouvelleDiv.appendChild(nouveauParagraphe)

// On ajoute la div dans le body
let body = document.querySelector("body")
body.appendChild(nouvelleDiv)
```
Dans le code ci-dessus :
    • on crée 2 variables qui vont contenir le texte du titre et du paragraphe ;
    • on crée 3 éléments: une div, un titre et un paragraphe ;
    • on insère du texte créé avec les variables dans le titre et le paragraphe ;
    • on insère du titre et du paragraphe en tant qu’enfants de la div ;
    • on insère une div en tant qu’enfant de la balise body. 
Cela fonctionne parfaitement, et donne le résultat suivant :

La méthode createElement est cependant un peu fastidieuse. Comment savoir avec précision quels éléments sont les enfants de qui, quand le code est complexe ? Tout cela rend la maintenance compliquée… 

Dans ce cas, la solution est d’écrire directement du HTML, sous forme de texte, et de l’insérer dans une propriété **innerHTML**. 

## Utiliser l’interpolation pour générer du HTML
Pour générer le HTML, nous pouvons utiliser la concaténation, comme nous l’avons vu au début de ce cours avec + .  Dans ce chapitre, l’heure est venue de découvrir une nouvelle méthode plus efficace encore : l’interpolation.

**L’interpolation** consiste à entourer la chaîne de caractères avec des **backticks : `**  . Ce caractère correspond à l’accent du “è”, mais sans le e en dessous 🙂. Ainsi, quand nous voulons insérer une variable, il suffit de l’entourer avec${}.
Voici un exemple :
```
let contenuTitre = "Azertype"
let contenuParagraphe = "L'application pour apprendre à taper plus vite !"

let div = ` 
    <div>
        <h1>${contenuTitre}</h1>
        <p>${contenuParagraphe}</p>
    </div>
    `;
```
L’interpolation est plus sécurisée que la concaténation simple avec  +  , et souvent plus facile à lire. N’hésitez donc pas à vous en servir à chaque fois que vous en avez besoin !

## Insérer votre HTML grâce à innerHTML
Maintenant que le code HTML est généré, comme avec createElement, nous devons l’insérer dans un élément existant de la page. Pour cela, on choisit la balise qui va contenir notre code HTML, et on met simplement ce code HTML dans la propriété innerHTML :
```
let body = document.querySelector("body")
body.innerHTML = div
```
Et voilà, le tour est joué ! 🥳

## En résumé
```
    • Créez un nouvel élément HTML : 
        ◦ en utilisant la méthode createElement puis en liant l’élément créé à la page grâce à appendChild ;
        ◦ en utilisant la propriété innerHTML pour insérer directement du HTML sous forme de texte à l’intérieur d’une balise.

    • L’interpolation permet de générer facilement des chaînes de caractères complexes en utilisant des backticks.