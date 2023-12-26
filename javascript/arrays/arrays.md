# Les tableaux en JavaScript
Un tableau en JavaScript est un **objet** qui permet de lister plusieurs variables ou valeurs, et de les regrouper.

## Déclarer un tableau en JavaScript
Pour déclarer un tableau en JavaScript, on utilise les **crochets [ ]** . Chaque valeur contenue dans le tableau est séparée par une **virgule  ,**  :  
const maCollectionDeFilms = ["Titanic", "Jurassic Park", "Le Seigneur des Anneaux"]  

On peut également stocker des variables dans le tableau :  
const monFilmPrefere = "Titanic"  
const monPremierFilm = "Le Seigneur des Anneaux"  

const maCollectionDeFilms = [monFilmPrefere, monPremierFilm]  
// maCollectionDeFilms vaut ["Titanic", "Le Seigneur des Anneaux"]

## Accédez à un élément de votre tableau
On doit utiliser les crochets, et mettre entre crochets le numéro de la case souhaitée. **La première case du tableau correspond à la case numéro zéro**.

let premierFilmDuTableau = maCollectionDeFilms[0] 

## Compter le nombre d’éléments de votre tableau

Pour connaître le nombre d’éléments que contient votre tableau, vous devez accéder à la propriété **length**, en utilisant le **point .** , comme pour les objets.

Cette propriété est préétablie par JavaScript. Elle est donc automatiquement disponible pour tous les tableaux. 

Si on veut connaître le nombre total de films dans la collection  :  
const maCollectionDeFilms = ["Titanic", "Le Seigneur des Anneaux"]  
const nombreDeFilms = maCollectionDeFilms.length  
console.log(nombreDeFilms)  
// nombreDeFilms vaut 2   

## Modifier un tableau grâce aux méthodes

Les tableaux sont des **conteneurs**. Pour effectuer des actions sur les données stockées dans un tableau (ajouter, supprimer des données…), on utilise des méthodes.

Les **méthodes** s’utilisent avec des **parenthèses ( )** . À l’intérieur de ces parenthèses on peut passer des valeurs, c'est-à-dire des données, qui serviront à la méthode pour modifier les données du tableau. On utilise déjà souvent la méthode fournie par JavaScript : **console.log() !** 

## Ajouter des données grâce à la méthode push
Pour ajouter des données à un tableau, on utilise la méthode **push** en lui indiquant la valeur à ajouter.  
let mesFilms = ["Titanic", "Jurassic Park"]  
mesFilms.push("Retour vers le futur")  

console.log(mesFilms)  
// mesFilms vaut ["Titanic", "Jurassic Park", "Retour vers le Futur"]

Avec la méthode push, la donnée qui est entre les parenthèses (ici “Retour vers le futur”) sera **ajoutée en dernier dans le tableau**.

## Supprimer des données grâce à la méthode pop

Pour supprimer la dernière donnée du tableau, on utilise la méthode **pop** sans rien écrire entre les parenthèses.  

let mesFilms = ["Titanic", "Jurassic Park", "Retour vers le futur"]  
mesFilms.pop()  

// mesFilms vaut ["Titanic", "Jurassic Park"]  

Il existe beaucoup d’autres méthodes pour manipuler les données d’un tableau, comme la méthode **splice** pour supprimer une donnée précise, ou la méthode **sort** pour trier les données. 

Pour en savoir plus, il y a la documentation !

# Distinguer les copies par “valeur” et par “référence”

## La copie par valeur
Lorsqu’on programme, il arrive parfois que l’on veuille dupliquer une variable. C’est le cas lorsque l’on doit sauvegarder une valeur avant de la modifier, par exemple. Pour cela, le plus simple est de copier le contenu d’une variable à l’intérieur d’une autre variable.

// Copie par valeur  
let variableSimple1 = 25   
let variableSimple2 = variableSimple1   

Si variable2 est un type simple (boolean, number ou string), alors le contenu sera dupliqué.  

Pour reprendre la métaphore de l’armoire, ce qui est dans le tiroir variable1 va être dupliqué, et la copie sera mise dans variable2. Au final, nous aurons deux tiroirs indépendants avec chacun une valeur à l’intérieur.
C’est ce qu’on appelle la **copie par valeur**. Nous avons copié le contenu d’une variable à l’intérieur d’une autre variable. Nous avons donc **deux variables indépendantes**.

# La copie par référence

Si on veut copier une variable qui contient un contenu de type “complexe” :  un objet ou un tableau, dans ce cas, JavaScript fait une **copie par référence**.

let variableComplexe1 = ['pomme', 'cerise']  
let variableComplexe2 = variableComplexe1

Ici, nous n’avons pas deux tiroirs, c’est l’étiquette qui a été copiée. En d’autres termes,  variable1 et variable2 sont deux étiquettes différentes pour le même tiroir. Nous avons donc **deux variables qui pointent sur le même contenu**.

Dans le cas d’une **copie par valeur**, si on modifie la valeur d’une des deux variables, la valeur de l’autre ne change pas. 
Dans le cas d’une **copie par référence**, si on change la valeur de la première variable, la valeur de la seconde est affectée aussi.

Pour dupliquer un tableau, on peut utiliser un **spread operator**, c’est un opérateur qui permet de faire automatiquement la copie, et cet opérateur s’écrit **trois petits points …**.

let variableComplexe3 = [...variableComplexe1];

Ici, je dis que dans variableComplexe3, je recopie un par un tous les éléments qui sont dans variableComplexe1. Comme ces variables sont de type simple, nous avons une vraie copie, et **les deux tableaux sont indépendants !**

////////////////////
// Copie par valeur
////////////////////  
let variableSimple1 = 25  
let variableSimple2 = variableSimple1  

variableSimple2 = 30

// Le console.log va afficher 25, le fait d’avoir changé la valeur de variableSimple2 ne change rien pour variableSimple1  
console.log("variableSimple1", variableSimple1)
console.log("variableSimple2", variableSimple2)

///////////////////////
// Copie par référence
///////////////////////  
let variableComplexe1 = ['pomme', 'cerise']  
let variableComplexe2 = variableComplexe1  
let variableComplexe3 = [...variableComplexe1];

variableComplexe2.push('poire')

// Le console.log va afficher pomme cerise ET poire. On a modifié la seconde variable, mais le contenu de la première a été changé aussi, parce que c’est le même contenu.  
console.log('variableComplexe1', variableComplexe1)
console.log('variableComplexe2', variableComplexe2)
console.log('variableComplexe3', variableComplexe3)

C’est également pour cette raison que les tableaux sont souvent déclarés avec **const** en JavaScript, même s'ils évoluent tout au long du code. **Ce qui est constant c'est l’endroit en mémoire où est stocké le tableau**, mais ce n’est pas le contenu. 

## En résumé
    • Un tableau est un conteneur qui permet de regrouper plusieurs valeurs ou variables.
    • Un tableau possède une propriété length qui permet de connaître le nombre de données contenues dans un tableau.
    • Une méthode s’utilise avec des parenthèses  ( )  , et permet d’interagir avec le contenu du tableau. Il existe de nombreuses méthodes différentes mises à disposition par le langage.
    • Lorsqu’on copie une variable simple, JavaScript réalise une copie par valeur (la valeur est dupliquée).
    • Lorsqu’on copie une variable complexe, JavaScript réalise une copie par référence (les deux variables pointent sur la même valeur).
