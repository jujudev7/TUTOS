# Afficher un message d’erreur

## Utiliser des if / else pour gérer les erreurs courantes

La manière la plus intuitive de gérer les erreurs est d’utiliser les techniques que nous maîtrisons déjà : les **if / else**.  
Pour illustrer cela, je vous propose d’écrire un code qui provoque une erreur, puis de voir ensemble comment gérer cette erreur.
```
let maVariable = document.getElementById("idInexistant")
maVariable.createElement("div")
```
On tente de récupérer un élément qui n’existe pas et d’y ajouter une div via createElement.  
Pour gérer ce type d’erreur, nous pouvons **tester la valeur de maVariable**, et nous assurer qu’elle n’est pas nulle :
```
let maVariable = document.getElementById("idInexistant")

if (maVariable === null) {
    console.log("L'élément n'existe pas");
} else {
    maVariable.createElement("div")
    // suite du traitement...
}
```
Dans ce code, l’instruction **maVariable === null** permet de tester si maVariable contient bien un élément récupéré avec **getElementById**.
Ce code fonctionne très bien. Mais il est composé de **3 parties** :  
    • les déclarations ;  
    • une portion pour gérer l’erreur ;  
    • le résultat.  

*OK très bien… En quoi c’est un problème ?*  

Le problème c’est que nous avons, au milieu de notre code, une partie dont l’unique but est de gérer l’erreur. Vous avez peut-être remarqué mon commentaire “suite du traitement”. Il est probable que nous ayons à nouveau besoin de gérer des erreurs dans cette suite…

En réalité, il est plutôt conseillé de placer la gestion de l’erreur ailleurs, de manière à avoir une structure** en 2 temps** : **déclaration** puis **résultat**. Concrètement, on essaie d’exécuter ce code, et en cas de problème, on appelle un bloc de code ailleurs pour gérer l’erreur.

Cela permet de distinguer d’un côté, notre exécution “quand tout marche bien”, et de l’autre la gestion de nos erreurs. Et vous savez quoi ? C’est exactement ce que nous pourrons faire grâce aux instructions **try / catch**. 😃

## Centraliser la gestion des erreurs

### Utiliser les instructions try / catch
Le bloc try / catch est composé de deux parties :   
    • l’instruction try (essayer, en français) va essayer d’exécuter du code ;   
    • l’instruction catch (attraper, en français) va attraper les éventuelles erreurs pour les gérer. 

Réécrivons l’exemple de la section précédente avec try / catch :
```
try {
    let maVariable = document.getElementById("idInexistant")
    maVariable.createElement("div")
    // suite du traitement
} catch {
    console.log("Il y a eu une erreur dans le bloc try");
}
```

Dans cette nouvelle version, le code principal se passe dans la section **try**. En cas d’erreur, le code s’arrêtera immédiatement, et le **catch** prendra le relais.

Ce qui est pratique, c’est que toute la gestion d’erreur est centralisée dans la partie **catch**. En d’autres termes, si nous utilisons 10 fois un **createElement**, inutile d’écrire 10 fois un if pour gérer les problèmes. Automatiquement, si l’un d’eux échoue, c’est le même catch qui prend le relais !

D’ailleurs, quand l’erreur dans le navigateur écrit **“Uncaught”** (non-attrapée, en français), c'est que ’erreur n'a pas été “attrapée” par un catch, donc elle apparaît telle quelle dans le navigateur.

Nous l’avons vu, le **try catch** peut être pratique. Ici l’utilisation de **createElement** a échoué. Ce qui s’est passé en réalité, c’est que nous avons tenté d’utiliser cette méthode, mais quand cela a échoué, JavaScript a aussitôt lancé une exception pour prévenir tout le monde : “Attention, une erreur s’est produite, vous pouvez l’attraper”.

### Utiliser l’instruction throw

Try sert à exécuter du code et catch à attraper les erreurs. Cela marche bien avec des erreurs JavaScript qui sont conçues pour **lancer des exceptions**. Cependant, il arrive que nous voulions créer nos propres fonctions, qui lancent une exception en cas d’échec.

Dans ce cas, la solution est d’utiliser l’instruction **throw** (lancer, en anglais). Cette dernière nous permet de lancer nos propres exceptions, qui pourront alors être **attrapées par un catch**.

Dans notre projet, nous avons par exemple vérifié que le champ nom n’était pas vide. Utilisons maintenant **try / catch et throw** pour gérer ces erreurs :

```
function verifierChamp(champ) {
    // Si le champ est vide, on lance une exception
    if (champ.value === "") {
        throw new Error(`Le champ ${champ.id} est vide`)
    }
}
```

Dans ce code :  
    • on a une fonction qui prend un champ en paramètre ;  
    • si le champ est vide, alors je lance une exception que je crée grâce à new Error ;  
    • on passe à cette erreur un paramètre : le message d’erreur. 

Lorsque vous utilisez **throw new Error()**, vous créez une instance d'objet "Error", qui est un type prédéfini en JavaScript pour représenter une erreur. Lorsqu'une erreur est levée avec throw new Error(), vous pouvez la capturer en utilisant une instruction catch dans une structure try...catch.

Dans cette structure, le mot-clé catch est suivi d'une variable (dans votre exemple, erreur) qui représente l'objet d'erreur capturé. Cependant, le nom de cette variable (erreur dans votre cas) peut être choisi librement ; il n'est pas intrinsèquement lié à throw new Error().

```
Voyons maintenant comment utiliser cette méthode pour tester un champ nom, un champ prenom et un champ surnom :
let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    try {
        event.preventDefault()

        let baliseNom = document.getElementById("nom")
        verifierChamp(baliseNom)

        let balisePrenom = document.getElementById("prenom")
        verifierChamp(balisePrenom)

        let baliseSurnom = document.getElementById("surnom")
        verifierChamp(baliseSurnom)

        // traitement du formulaire
        // ...
    } catch (error) {
        console.log("Une erreur est survenue : " + error.message)
    }
})
```

Dans ce code :  
    • on écoute l’événement submit de mon formulaire ;  
    • on vérifie les champs un par un ;  
    • En cas de problème, si un des champs est vide, le code va directement exécuter la partie catch.

Notez l’utilisation de la propriété **error.message** pour afficher uniquement le message d’erreur qui a été envoyé.

*Pfiouuuu… C’est quand même plus compliqué que d’utiliser des if…* 😅  

Au premier abord, cela paraît effectivement plus compliqué. Considérez **try catch** comme un outil mis à disposition des programmeurs, au même titre que les fonctions, les objets, les tableaux, les boucles… 

Vous n’êtes pas obligé de l’utiliser, mais je vous garantis qu’une fois la technique maîtrisée, elle vous permettra d’améliorer l’organisation de votre code en centralisant la gestion des erreurs.

## En résumé
    • Veillez à traiter toutes les erreurs qui pourraient survenir dans le code : 
        ◦ grâce à if / else pour les erreurs courantes ;
        ◦ en centralisation la gestion des erreurs grâce aux exceptions try, catch et throw pour les situations plus complexes.

    • Le bloc try catch fonctionne en deux parties :
        ◦ un bloc try qui essaie d’exécuter une portion de code ;
        ◦ un bloc catch qui est lancé si jamais un élément du bloc try a lancé une exception.

    • Vous pouvez utiliser throw new Error(message) pour lancer vous-même vos exceptions.