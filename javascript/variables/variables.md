# Déclarer une variable
En programmation, on manipule des données (informations) que l’on range dans des variables.
**Une variable c’est une valeur, un nom et un type.** Ex : 
const monPrenom = "David"

Pour déclarer une variable, on peut utiliser **let** ou **const**.
const = constante, la valeur ne change pas
Avec let, en revanche, on peut modifier la valeur de la variable, ex :
let monAge = 42
monAge = 43
Notez que je n’ai pas réécrit l’instruction let. En effet, une fois la variable déclarée une première fois grâce à let, je peux l’utiliser directement.

L’instruction **console.log()** permet de vérifier le contenu d’une variable, ex :
let monAge = 42 
console.log(monAge)
La console affiche alors :
42

Le nom des variable est TRÈS IMPORTANT, il faut qu’il soit **explicite !** (ex: monNom, monAge)

Il y a 3 types de variables :
    • le type **string** : correspond à une chaîne de caractères, c’est-à-dire un texte ;
    • le type **number** : correspond à un chiffre ;
    • le type **boolean** : correspond à un booléen en mathématiques, c’est-à-dire une valeur qui est soit vraie (true, en anglais) soit fausse (false, en anglais).

let placesDejaVendues = 150
placesDejaVendues = placesDejaVendues + 10
→ 160

Mais on peut éviter la répétition de placesDejaVendues de chaque côté de l’opération.
JavaScript a créé des raccourcis pour les réaliser : les **opérateurs d’affectation**. On peut donc écrire plus simplement :
let placesDejaVendues = 150
placesDejaVendues **+=** 10
Et le résultat est strictement équivalent. 😉

## Manipulez des chaînes de caractères (string)

Pour déclarer une variable qui contient une chaîne de caractères, nous devons entourer notre texte avec des guillemets simples  ‘  ou doubles  “  .
Si on utilise l’opérateur  +  entre deux chaînes de caractères, on réalise ce que l’on appelle en programmation une concaténation.
let premierePartie = "Mon nom est Bond"
let deuxiemePartie = ", James Bond."
let punchline = premierePartie + deuxiemePartie
// punchline vaut “Mon nom est Bond, James Bond.”

## Manipulez des booléens

2 possibilités : oui/non, vrai/faux, allumé/éteint. Ainsi, une variable qui contient un booléen ne peut avoir que deux valeurs : true ou false. On utilise ce type de données pour savoir si un état est vrai ou faux dans notre code.

## Différenciez les types de données
Lorsque vous utilisez des opérateurs, ne mélangez pas les types de données entre eux. Assurez-vous que vos variables ont des types cohérents.
Reprenons l’exemple des places de cinéma, mais avec des guillemets autour des chiffres.
Si on écrit ceci :
let placesDejaVendues = "150"
placesDejaVendues += "10"
console.log(placesDejaVendues)
La variable placesDejaVendues va contenir “15010” et pas “160”, car la présence des guillemets indique à JavaScript que le type de données est “String”, c'est-à-dire du texte. Par conséquent, le  +  n’est plus un opérateur d’addition. Il devient un opérateur de concaténation, qui colle deux morceaux de texte.

Pour résoudre ce problème, nous pouvons soit enlever les guillemets autour des chiffres, soit préciser à JavaScript que nous voulons vraiment utiliser des chiffres, grâce à l’instruction **Number**. Cette dernière permet de convertir le texte “150” en chiffre 150.

let placesDejaVendues = Number("150")
placesDejaVendues += Number("10")
console.log(placesDejaVendues)
160
Cette fois-ci, le résultat est correct !
