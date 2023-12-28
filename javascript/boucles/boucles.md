# Répéter du code grâce aux boucles
Une **boucle** est une structure conditionnelle qui permet de répéter un certain nombre de fois du code, jusqu’à ce qu’un test ne soit plus vrai.

## Rédiger une boucle
Il existe 2 principaux types de boucles :  
    • La boucle **for** permet de répéter du code lorsque l’on sait d’avance combien de fois il faudra le répéter.  
Par exemple, si nous voulons demander exactement 3 fois à l’utilisateur d’entrer un mot.  
    • La boucle **while** permet de répéter du code autant de fois qu’il le faut pour qu’une condition ne soit plus vraie.  
Par exemple, si nous voulons redemander un mot à l’utilisateur jusqu’à ce que ce mot soit correct.

## Utiliser l’instruction for pour répéter du code un certain nombre de fois
Commençons par écrire une boucle qui affiche 0, puis 1, puis 2. Dans ce cas, nous savons à l’avance combien de tours de boucle nous voulons faire, un for est donc tout à fait indiqué ici.

Pour rédiger notre boucle for, nous allons utiliser l’instruction for (“pour”, en anglais). Cette instruction sera suivie d’une condition entre parenthèses dans laquelle on indiquera :   
    • le départ de la boucle ;  
    • au bout de combien de tours la boucle devra s’arrêter.  

Voici comment la rédiger :  
```
for (let compteur = 0; compteur < 3; compteur = compteur + 1) {
    console.log(compteur)
}
```

 • Nous avons d’abord notre for, suivi de 3 instructions séparées par un point virgule “;”.  
    • Ensuite, un bloc de code entre accolades : le console.log.   
    • Ce bloc de code sera exécuté à chaque tour de boucle.   
1) **Initialisation** : let compteur = 0
Ici nous définissons une nouvelle variable appelée “compteur”, et qui contient 0.

2) **Condition** : compteur < 3
Ceci est la condition d’arrêt. La boucle continuera tant que compteur est plus petit que 3.

3) **Exécution** : compteur = compteur + 1
À chaque tour de boucle, on fait évoluer la valeur de compteur. Ici, on dit que compteur vaut la valeur précédente de compteur, plus 1.

Au premier tour de boucle, compteur vaut 0, puis 1, puis 2, jusqu’à ce que compteur arrive à 3 (la condition d'arrêt) et là, on sort de la boucle. 

Pour la taper plus vite, il existe une écriture un peu raccourcie. Par convention, on nomme souvent la variable compteur “i” (comme “indice”). Et au lieu d’écrire i = i+1, on utilise l’opérateur d’incrémentation  ++  , qui augmente la valeur d’une variable de 1.
```
for (let i = 0; i < 3; i++) {
    console.log(i)
}
```
## Utiliser l’instruction while pour répéter du code
Reprenons notre exemple de compteur avec un algorithme différent :
**Tant que** le compteur n’est pas égal à 3, on augmente le compteur de 1.

Pour rédiger cette boucle while, nous allons utiliser la structure conditionnelle while (“tant que”, en français) qui sera suivie d’une condition entre parenthèses. Cette condition indique le moment où notre boucle doit s’arrêter.
```
let i = 0
while (i < 3) {
    console.log(i)
    i++
}
```
   • On déclare la variable i, que l’on initialise à zéro, avant la boucle ;  
    • Le while ne contient que la condition   d’arrêt : tant que i est plus petit que 3
    • On incrémente i (i va gagner +1 à chaque tour de boucle). 

**Attention !** Si vous oubliez d’augmenter la valeur de i, alors la condition i < 3 sera toujours vraie, et vous aurez **une boucle infinie !** Cela peut même faire planter votre navigateur !

## En résumé
    • Une boucle est une structure conditionnelle qui permet de répéter du code plusieurs fois.

    • La boucle for permet de répéter du code pour un nombre défini de fois.
    
    • La boucle while permet de répéter du code jusqu’à ce qu’une condition ne soit plus remplie.