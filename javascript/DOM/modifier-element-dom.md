# Modifiez un élément d’une page web
## Appréhender les attributs d’un élément HTML
Commençons par un rappel de la façon dont sont construites les balises HTML, avec cet exemple :
```
<img id="premiereImage" src="image.jpg" alt="Ceci est une image de test" class="photo flexCenter">
```
Ici nous constatons img, qui sert à afficher une image. En plus de son nom, cette balise possède ici 4 attributs qui permettent de la configurer :   
    • **id** : l’identifiant de la div ;  
    • **src** : l’emplacement de l’image ;  
    • **alt** : le texte alternatif pour l’image ;  
    • **class** : la liste des classes appliquées sur la balise image. 

## Modifier un élément du DOM
Pour modifier un élément du DOM, JavaScript propose là encore de nombreuses méthodes. Nous en aborderons deux dans ce chapitre :  
    • **setAttribute** : méthode la plus générique, qui permet de spécifier n’importe quel attribut ;  
    • **classList** : propriété spécifique qui permet de modifier des classes.   

## Utiliser setAttribute pour modifier les attributs
Si nous voulons modifier l’attribut alt de notre balise image, nous pouvons écrire :
```
let baliseImage = document.getElementById("premiereImage");
baliseImage.setAttribute("alt", "Ceci est la nouvelle valeur de alt");
```
Dans ce code :  
    • on commence par récupérer l’image grâce à **getElementById** ;   
    • directement sur la balise, on applique la méthode **setAttribute** ;  
    • le 1er paramètre représente le nom de l’attribut que l’on souhaite modifier, ici, l’attribut alt ;  
    • le 2nd paramètre est la nouvelle valeur que l’on souhaite lui attribuer. 

Cette méthode avec **setAttribute** est générique : on peut l’appliquer à tous les attributs, et créer des attributs personnalisés au besoin. Cependant, pour les attributs qui sont valides en HTML de base, il n’est pas nécessaire d’utiliser la méthode setAttribute.  
Ainsi, nous pouvons plus simplement écrire : 
```
baliseImage.alt = "Ceci est une image de test modifiée";
```

## Utilisez classList pour modifier les classes
Parmi les attributs disponibles, il en existe un particulier, qui correspond à la liste des classes qui sont appliquées sur une balise.
```
<div class="listeMots centree actif photo"></div>
```

Il est évidemment possible de modifier cet attribut avec setAttribute, mais si l’on veut ajouter ou supprimer une seule classe, c’est peu pratique, car il faut alors réécrire l'ensemble des classes.   JavaScript nous propose donc une syntaxe spécifique : l’utilisation de la propriété **classList** et des méthodes add et remove.
```
    baliseImage.alt = "Ceci est une image de test modifiée";
    baliseImage.classList.add("nouvelleClasse")
    baliseImage.classList.remove("photo")
```

## Utilisez l’inspecteur pour vérifier vos modifications
En utilisant des propriétés et des méthodes, nous modifions le code HTML de la page. Il est donc important de vérifier que ces modifications correspondent bien à ce que nous souhaitons, comme nous l'avons fait jusqu’à présent avec des **console.log**.

Pour cela, les navigateurs proposent d’utiliser **l’inspecteur**. Pour ce faire, faites un clic droit sur n’importe quel élément de votre page, et choisissez l’option “Inspecter”.

Reprenons cette balise, puis, appliquons du code JS :
```
<img id="premiereImage" src="image.jpg" alt="Ceci est une image de test" class="photo flexCenter">
let baliseImage = document.getElementById("premiereImage");
baliseImage.setAttribute("alt", "Ceci est une image de test modifiée");
baliseImage.src = "cheminImage.jpg";
baliseImage.classList.add("nouvelleClasse")
baliseImage.classList.remove("photo")
```
Bien vérifier le résultat final grâce à **l’inspecteur !**
Ici, nous retrouvons bien notre balise image initiale avec l’id “premiereImage”, mais les attributs class, src et alt ont bien été mis à jour. 

## En résumé
    • Utiliser des attributs pour configurer les éléments HTML d’une page web.

    • Modifier la valeur des attributs : 
        ◦ en utilisant la méthode setAttribute ;
        ◦ en utilisant la syntaxe : elementHtml.nomAttribut = “nouvelle valeur d’attribut”.
        Ex : baliseImage.alt = "Ceci est une image de test modifiée";

    • Modifier les classes avec la propriété classList et des méthodes add et remove :
    baliseImage.classList.add("nouvelleClasse")
    baliseImage.classList.remove("photo")