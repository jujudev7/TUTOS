# Organiser son code grâce aux fonctions
## Découvrir les fonctions
Une **fonction** est un bloc de code auquel on attribue un nom. Appeler cette fonction permet d’exécuter le code qu’elle contient. On parle donc de fonction, car il s’agit d’un bloc de code qui a un rôle spécifique au sein de votre fichier JavaScript. Une fonction peut ainsi :   

    • contenir des informations, qu’on appelle paramètres ;  
    • retourner un résultat ;  
    • effectuer une action.   

En fait, vous utilisez déjà des fonctions depuis le début de ce cours, sans même le savoir ! Par exemple, quand vous écrivez :
```
motUtilisateur = prompt('Entrez un mot')
```
**Prompt** est une fonction :   
    • elle prend en paramètre le message à afficher (ici, “Entrez un mot”) ;  
    • elle retourne un résultat : le mot tapé par l’utilisateur.  
     

Dans l’exemple ci-dessus, le retour de la fonction prompt est copié dans motUtilisateur. 

## Rédiger une fonction en JavaScript
Pour notre application, nous souhaitons écrire une fonction qui va générer une phrase pour donner le score final à l'utilisateur. Cette fonction prendra donc en paramètre 2 informations :   
    • le score ;  
    • le nombre de questions.
    
```
function retournerMessageScore(score, nombreQuestions) {
    let message = 'Votre score est de ' + score + ' sur ' + nombreQuestions
    return message
}
```
   • le mot-clé **function** (“fonction”, en anglais) est suivi du nom “retournerMessageScore”. Ce mot est ici obligatoire pour définir la fonction, mais il n’est ensuite plus nécessaire lorsqu’on l’utilise ;  
    • par conséquent, la fonction “retournerMessageScore” est créée ;  
    • entre parenthèses sont indiqués les **paramètres** envoyés à cette fonction : “score” et “nombreQuestions” ;  
    • entre **accolades** est indiqué le bloc de code qui sera exécuté quand la fonction sera appelée (let message… et return) ;  
    • dans ce bloc de code, nous déclarons une **variable** message dans laquelle nous créons notre message ;  
    • le code est finalisé avec le nouveau mot-clé **return**. Ce mot signifie que la fonction va retourner le contenu de message.  
     

Pour le moment, ce code ne provoquera aucun changement. Ces instructions définissent notre fonction… Mais pour qu’elle produise son effet, nous devons **l’appeler**.
```
let nouveauMessage = retournerMessageScore(5, 10)
console.log(nouveauMessage)
```

Gardez également en tête que **l’ordre des paramètres est très important !** La fonction a un premier paramètre nommé “score” et un second paramètre nommé “nombreQuestions” :   
    • si on appelle la fonction avec 5 et 10, 5 étant le premier paramètre, il ira donc dans la variable “score” ;  
    • le 10 étant positionné en second, il ira dans la variable “nombreQuestions”, positionnée en second aussi. 

## Coder proprement
Les fonctions sont un élément majeur de votre code. Il est donc très important de respecter quelques **bonnes pratiques** pour prévenir tout problème.

### Définissez une tâche spécifique pour chaque fonction

Dans l’idéal, on attribue une seule tâche à une fonction : afficher, calculer, lancer une opération, initialiser… Si une fonction s’occupe de tout gérer à la fois, elle comportera beaucoup de lignes, difficiles à comprendre, à modifier et à tester.

### Écrivez des fonctions courtes
Dans l'idéal, vos fonctions ne doivent pas dépasser 30 lignes. Si le but de la fonction est clair, un code court est généralement suffisant pour l’atteindre.

Si la fonction prend trop d’ampleur, c’est peut-être qu’elle est mal conçue, qu’elle fait trop de choses, ou qu’il faudrait la découper en plusieurs sous-fonctions.

### Nommer clairement ses fonctions
Comme pour les variables, le nom d’une fonction devrait être suffisamment clair pour permettre d’en deviner le contenu sans lire le code qu’elle contient.

Vous pouvez par exemple utiliser un verbe pour nommer vos fonctions. Si une fonction s’appelle resultat, que fait-elle ? Elle calcule le résultat ? Elle l’affiche ? Elle le réinitialise ? En utilisant des noms tels que *afficherResultat, calculerResultat, reinitialiserResultat*… là, plus aucune ambiguïté !

### Nommer clairement ses paramètres
Les paramètres doivent également être le plus explicites possible :
```
lancerJeu(a) {
    // code
}
```

Que dois-je envoyer à ma fonction pour remplir le paramètre a ? Est-ce qu’il représente le nom du joueur ? La liste des mots qu’il doit taper ? Autre chose ?   
Ici, est donc préférable d’écrire :
```
lancerJeu(listeMots) {
    // code
}
```

Rien qu’avec le nom, nous savons maintenant que le paramètre contient en réalité un tableau avec une liste de mots. N’oubliez pas non plus qu’en cas d'ambiguïté, vous pouvez toujours insérer un commentaire pour ajouter une précision !

### Organiser le code en plusieurs fichiers
Découper votre code en plusieurs fonctions permet de mieux organiser vos idées et facilite les modifications, mais ce n’est pas suffisant…

Si votre projet continue de grandir, regrouper toutes vos fonctions au même endroit risque de rapidement causer des problèmes de lisibilité et de navigation. C’est encore plus vrai si vous êtes plusieurs à travailler sur le même projet !
```
On écrit :   
<script src="script.js"></script> afin d’inclure notre fichier script.
```

Imaginez maintenant que nous voulions créer un fichier de configuration qui contiendrait nos deux tableaux listeMots et listePhrases. Cela nous permettrait de faire évoluer ces tableaux sans risquer de modifier par erreur la logique du code !

Pour y parvenir, nous pouvons inclure ce nouveau fichier en insérant une nouvelle ligne dans le fichier HTML pour préciser le chemin du nouveau fichier :
```
<script src="config.js"></script>
<script src="script.js"></script>
```

Dans cet exemple, on met le fichier config.js **avant** script.js, car les variables que l’on va définir dans le fichier config.js seront utilisées par script.js. Elles doivent donc être définies en premier.

Ensuite, nous devons définir le contenu du fichier. Pour cela, nous allons supprimer les deux const listeMots et listesPhrases de script.js, et les copier  dans config.js.
```
// Liste des mots utilisés pour le jeu
const listeMots = ['Bonjour', 'Salut', 'Coucou']
const listePhrases = ['Bonjour, comment allez-vous ?', 'Salut, ça va ?', 'Coucou, ça va ?']
```

## Maîtriser la portée des variables
Les variables ont une **portée**, qui est définie par l’endroit où cette variable est déclarée. Ainsi, on distingue 2 types de variables :    
    • les variables **globales** : visibles et utilisables dans l’ensemble du code ;  
    • les variables **locales** : qui ne peuvent être utilisées qu’au sein du bloc de code dans lequel elles sont définies. 
```
let monNombre = 1 
// monNombre est une variable globale, car elle est déclarée en dehors d’un bloc de code

function afficheUnNombre() {
    let monNombreLocal = 2 
   // monNombreLocal est une variable locale, car déclarée uniquement au sein d’une fonction
    console.log("Intérieur de la fonction : ")
    console.log(monNombre) // monNombre est accessible
    console.log(monNombreLocal) // monNombreLocal est accessible
}

afficheUnNombre()
console.log("Extérieur de la fonction : ")
console.log(monNombre) // monNombre est accessible
console.log(monNombreLocal) // monNombreLocal n’est pas accesssible
```

• les chiffres 1 et 2 apparaissent en premier : ils sont affichés dans la fonction afficheUnNombre ;  
    • le dernier console.log renvoie une erreur, due au fait que la variable monNombreLocal est définie au sein du bloc de code de la fonction afficheUnNombre.

Comme il s’agit d’une variable **locale**, elle n’est pas accessible dans l’ensemble du code. Elle est donc inconnue lorsqu’on tente de l’afficher hors de la fonction qui la déclare.

À mesure que votre code s’agrandit, les variables s’accumulent. Certaines peuvent désigner le même élément, avoir le même nom… et provoquer des résultats inattendus.

En restreignant une variable à un **bloc de code**, vous l’empêchez d'interférer avec une autre variable globale. Cela vous évitera de nombreux bugs particulièrement difficiles à trouver !

## En résumé
    • Une fonction est un morceau de code qui accomplit une tâche spécifique. L’utilisation de fonctions permet d’organiser son code en blocs fonctionnels.

    • Pour créer une fonction en JavaScript, on utilise le mot-clé function et on lui attribue un nom.

    • On peut appeler une fonction en utilisant son nom, suivi de parenthèses  ()  . Si la fonction comporte des paramètres, ceux-ci sont ajoutés entre les parenthèses. 

    • Vous pouvez définir une valeur de retour que la fonction renvoie après son exécution. Cette valeur retournée par la fonction pourra alors être utilisée dans la suite du code. 

    • Séparer son code en plusieurs fonctions et en plusieurs fichiers vous permet de mieux découper votre code, et donc de le rendre plus simple à comprendre. 

    • Une variable déclarée dans un bloc de code n’est accessible que dans ce bloc de code.
