# Créer un formulaire de saisie de données
## Récupérer la valeur d’un champ de formulaire
### Découvrir les différents types de champs de formulaire
```
<form>
    <label for="name">Nom</label>
    <input type="text" id="name" name="name" placeholder="Votre nom" required>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Votre email" required>
    <label for="message">Message</label>
    <textarea id="message" name="message" placeholder="Votre message" required></textarea>
    <input type="submit" value="Envoyer">
</form>
```
Un **formulaire** est composé d’une balise **form** qui englobe une série d’autres balises qui composent le formulaire : labels, input, texterea et select. On parle de **champ ou de champ de saisie** pour évoquer les éléments qui permettent à l’utilisateur de saisir une donnée dans un formulaire. 

**Les balises labels** servent à indiquer un texte, lié au champ que l’utilisateur va devoir remplir. 

**Les balises input** forment le cœur des formulaires. Elles permettent à l’utilisateur de saisir des données.
```
<input type="text" id="inputEcriture" name="inputEcriture">
```
    • text : pour saisir un texte ;
    • password : pour saisir un texte tout en cachant ce qui est saisi ;
    • email : pour saisir un texte et vérifier que son format correspond bien à celui d’un e-mail ; 
    • number : pour saisir un nombre ; 
    • checkbox : pour afficher une case à cocher ;
    • radio : pour afficher un bouton radio, c’est-à-dire un bouton qui permet à l'utilisateur de sélectionner un seul élément dans une liste ;
    • date : pour saisir une date à l’aide d’un calendrier qui s’affiche au clic sur le champ.

**Les balises textarea**  
La balise input de type texte ne comporte qu’une seule ligne. 
**textarea** permet d’écrire des paragraphes :
```
<textarea name="textarea" id="textarea"></textarea>
```
**Les balises select**

La balise select permet de créer une **liste déroulante**. La liste d'options est définie à l'aide de balises option imbriquées à l'intérieur de la balise select. Exemple :
```
<select id="films" name="films">
    <option value="batman">Batman</option>
    <option value="seigneur-des-anneaux">Le seigneur des anneaux</option>
    <option value="titanic">Titanic</option>
</select>
```
## Récupérer les valeurs avec la propriété “value”
```
<input type="text" id="nom" name="nom">
```
Pour récupérer sa valeur en JavaScript, nous écrirons :
```
let baliseNom = document.getElementById("nom")
let nom = baliseNom.value
console.log(nom); // affiche ce qui est contenu dans la balise name
```
Cette méthode fonctionne pour la plupart des balises :
    • input de type texte, numérique, e-mail, mot de passe ; 
    • textarea ;
    • select.

## Récupérer les valeurs des cases à cocher
Une case à cocher (**checkbox**) est un cas particulier, car l’utilisateur ne rentre pas une valeur. Il décide de cocher, ou non, la case. La valeur de ce champ est donc nécessairement **true** si la case est cochée, ou **false** si elle ne l’est pas.
Pour vérifier cela, vous devez utiliser la propriété checked. Exemple :
```
<input type="checkbox" id="accepter" name="accepter">
let baliseAccepter = document.getElementById("accepter")
let accepter = baliseAccepter.checked
console.log(accepter); // affiche true ou false
```
## Récupérer les valeurs des boutons radio
Les boutons radio partagent le même “name”. De cette manière, lorsqu’un utilisateur clique sur un des boutons pour le sélectionner, les autres sont automatiquement désélectionnés. 
```
<label>Préférence de couleur :</label>
<input type="radio" id="red" name="couleur" value="red" checked>
<label for="red">Rouge</label>
<input type="radio" id="blue" name="couleur" value="blue">
<label for="blue">Bleu</label>
<input type="radio" id="green" name="couleur" value="green">
<label for="green">Vert</label>
```
Dans ce code, il y a plusieurs champs input de type radio. Ces derniers ont des values différentes. Avant de récupérer la bonne value, nous devons donc savoir quel est le champ qui est coché.
Pour cela, nous devons **faire une boucle** sur l’ensemble des boutons radio jusqu’à trouver celui qui a la **propriété checked à true**. Nous pourrons alors récupérer sa value :
```
let baliseCouleur = document.querySelectorAll('input[name="couleur"]')
let couleur = ""
for (let i = 0; i < baliseCouleur.length; i++) {
    if (baliseCouleur[i].checked) {
        couleur = baliseCouleur[i].value
        break
    }
}
console.log(couleur) // affiche la valeur du radio coché
```
Dans le code ci-dessus :  
    • on a d'abord récupéré tous les inputs avec le name qui vaut “couleur”, en utilisant **querySelectorAll** ;  
    • on a ensuite parcouru l’ensemble des balises jusqu’à trouver une balise qui est cochée (**checked**);  
    • on a enfin stocké la couleur dans la variable couleur et on a écrit **break**, pour stopper la boucle et arriver directement au console.log après celle-ci. 

## En résumé
    • Utilisez les formulaires pour permettre à l'utilisateur de saisir des informations. 
    • Vous pouvez utiliser différent types de champs pour saisir ces informations :
        ◦ input de différents types (texte, numérique, radio, case à cocher…) ;
        ◦ textarea ;
        ◦ select.
    • Pour récupérer la valeur d’un champ, utilisez différentes options en fonction de votre contexte : 
        ◦ pour la plupart des champs : utilisez la propriété value ;
        ◦ pour les cases à cocher : utilisez la propriété checked ;
        ◦ pour récupérer la valeur des boutons radio, parcourez-les jusqu’à trouver celui qui est coché, puis utilisez la propriété value sur ce bouton.
