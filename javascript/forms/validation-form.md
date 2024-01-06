# Mettre en place des règles de validation
## Vérifier la valeur d’un champ

Pour éviter les erreurs à la soumission d'un formulaire, nous devons nous assurer que le champ est bien renseigné par l’utilisateur. Cette vérification peut être réalisée à deux étapes clés :  
    • à l’envoi du formulaire ;  
    • à la saisie de chaque champ du formulaire. 

## Vérifier un champ à l’envoi du formulaire
Reprenons le code d’un formulaire très simple avec nos deux champs, nom et e-mail :
```
<form>
    <!-- champ nom -->
    <label for="nom">Nom</label>
    <input type="text" id="nom" name="nom" placeholder="Votre nom">

    <!-- champ email -->
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Votre email">

    <!-- bouton de validation -->
    <button>Envoyer</button>
</form>
```
Pour vérifier si le champ “nom” n’est pas vide, à la soumission, nous allons donc :  
    • écouter l’événement submit sur le formulaire ;  
    • récupérer la valeur de ce champ ;  
    • réaliser notre test.  

```
const form = document.querySelector('form');

// Ajout d'un écouteur d'événement sur le formulaire pour écouter le submit
form.addEventListener("submit", (event) => {
    // On empêche le comportement par défaut
    event.preventDefault();

    // On fait la vérification.
    const baliseNom = document.getElementById('nom');
    const valeurNom = baliseNom.value;
    if (valeurNom === "") {
        console.log('Le champ nom est vide');
    } else {
        console.log('Le champ nom est rempli');
    }
});
```

Dans ce code, on a  :  
    • écouté l'événement submit sur le formulaire ;  
    • fait un preventDefault pour éviter un rechargement de la page ;  
    • vérifié la valeur du champ ;  
    • affiché un message dans la console pour vérifier.

Dans notre cas ici, si on rentre un espace dans le champ, il n’est pas vide, car il contient bien un caractère. Pour autant, on ne peut pas dire qu’il soit correctement rempli. C’est pourquoi la bonne pratique consiste à nettoyer les champs avant de les tester. En utilisant **la méthode trim()**, vous pouvez ainsi nettoyer le champ et supprimer automatiquement les espaces et autres tabulations autour de la chaîne à tester !

## Vérifiez un champ à la saisie d’un champ du formulaire
Pour vérifier la valeur d’un champ à la saisie, le principe est le même. Nous allons écouter un événement. Deux types d'événements sont possibles dans ce cas :  
    • l’événement input : il se déclenche à chaque fois que l’utilisateur tape une lettre dans le champ ;  
    • l’événement change : il se déclenche quand l’utilisateur a fini de taper, et sélectionne un autre élément de la page. 
     
Voici un exemple avec change, mais n’hésitez pas à essayer input pour voir la différence de comportement.

```
const baliseNom = document.getElementById('nom');
baliseNom.addEventListener('change', (event) => {
    const valeurNom = event.target.value;
    if (valeurNom === "") {
        console.log('Le champ nom est vide');
    } else {
        console.log('Le champ nom est rempli');
    }
});
```

Ici j’écoute l’événement input qui va se produire à chaque fois que j’écris dans le champ baliseNom.

## Réaliser une validation complexe avec les expressions régulières

Comment faire pour savoir si un texte correspond au format d’une adresse e-mail ?

## Découvrir les expressions régulières
Le principe des **expressions régulières** est de décrire, dans un format précis, l’ensemble des chaînes de caractères possibles, puis de tester si la chaîne de caractères correspond à ce format. Les expressions régulières sont également appelées **RegEx** ou **RegExp**, pour “Regular Expression”, en anglais.

Imaginons que nous voulions vérifier qu’une chaîne de caractères ne contient que des lettres : pas de chiffre, pas d’espace.
Dans ce cas, nous allons créer une expression régulière qui va décrire un format où seules les lettres sont autorisées :

```
let chaine = "cachalot"; // Testez avec des chiffres pour voir la différence
let regex = new RegExp("^[a-z]+$");
et resultat = regex.test(chaine);
console.log(resultat); // Affiche true.
```

Dans ce code :
    • on a déclaré une variable chaîne avec un mot ;  
    • on a déclaré un objet RegExp avec le mot-clé new, et on lui a passé entre parenthèses l’expression régulière qui décrit mon format. 

Au final, cette expression dit : *“Nous voulons une chaîne de caractères qui commence et qui finit par un ou plusieurs caractères compris entre a et z.”* Revenons en détail sur son  contenu :  
    • **^**  : signifie que la chaîne doit commencer par ce qui suit ;  
    • **[a-z]+**  : signifie que la chaîne doit avoir des lettres comprises entre a et z. Le  +  signifie qu’il faut au minimum une seule lettre entre a et z.   
    • $  : signifie que la chaîne doit finir par ce qui précède. 
Voici quelques exemples d’expressions régulières simples :  
    • **[a-z]**  : une lettre entre a et z ;  
    • **[a-zA-Z]**  : une lettre entre a et z ou A et Z ;   
    • **[a|b]**  : une lettre : a ou b, à l’exclusion de toutes les autres ;  
    • **\d ** : n’importe quel chiffre ;  
    • **\w**  : n’importe quelle lettre ;  
    • **\d{3}**  : au moins trois chiffres.  

Tous ces éléments peuvent se combiner pour décrire précisément le format que nous voulons tester. N’hésitez pas à consulter la documentation pour en savoir plus !

## Définir une expression régulière pour vérifier une adresse e-mail
Dans cette situation, votre premier réflexe doit être de vous poser la question suivante : qu’est-ce qui caractérise une adresse e-mail ?

Prenons quelques exemples valides et non valides :  
    • david@openclassrooms.com : l’adresse est valide.   
    • david.pierru@openclassrooms.com : l’adresse est valide.  
    • david-pierru@open-classrooms.com : l’adresse est valide.  
    • david.openclassrooms.com : l’adresse n’est pas valide, car il manque le **@**.  
    • david@openclassrooms : l’adresse n’est pas valide, il manque **l'extension**. 

Cela fait beaucoup de règles… 😅 Nous allons donc construire notre expression régulière petit à petit. 

**Utiliser ce site : https://regex101.com/**

Il permet de tester en direct notre expression. 
L’expression que nous allons construire va vérifier le format suivant :  
“nom @ fournisseur . extension”

Cela nous fait 5 étapes : une pour le nom, une pour le @, une pour le fournisseur, une pour le point et la dernière pour l’extension.

**Étape 1 : vérifier le nom**

Une adresse e-mail commence par plusieurs lettres ou chiffres. Il est également possible d’avoir des tirets  -  ou des points  .  . Nous pouvons donc commencer par écrire comme expression :
**[a-z0-9._-]+**

Cela signifie que nous voulons au moins un caractère qui correspond à ce qui est entre crochets. Donc un caractère qui soit :  
    • une lettre entre a et z ;  
    • un chiffre entre 0 et 9 ;  
    • le caractère  .  ;  
    • le caractère  _  ;  
    • le caractère  -  .

**Étape 2 : vérifier l’arobase**

Ensuite il nous faut un @. Nous écrirons donc :  
**[a-z0-9._-]+@**

**Étape 3 : vérifier le fournisseur**

Puis nous avons à nouveau un mot (le fournisseur). Nous écrirons donc :  
**[a-z0-9._-]+@[a-z0-9._-]+**

**Étape 4 : vérifier le point**

Le  .  étant utilisé comme symbole dans les expressions régulières, nous devrons l'échapper, c'est-à-dire expliquer à l’interpréteur que ce  .  doit être considéré comme le caractère  .  , et pas interprété.  
**[a-z0-9._-]+@[a-z0-9._-]+\.**

**Étape 5 : vérifier l'extension**

Et finalement, nous voulons ajouter l'extension :  
**[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+**

L’expression dans son ensemble signifie donc : un caractère ou plus, suivi d’un @, suivi d’un caractère ou plus, suivi d’un point, suivi d’un caractère ou plus : nous avons nos 5 étapes !

Pas très facile à lire, tout ça… 🤨 

**Utilisez ce site : https://regexper.com/** 

Il vous permettra de visualiser les expressions générées pour faciliter leur lecture. 

## En résumé
    • Mettre en place des règles de validation pour vous assurer que l’utilisateur a correctement saisi ses données : 
        ◦ vérifier la valeur d’un champ pour les cas simples ;
        ◦ définir des expressions régulières pour les cas plus complexes.

    • Vous pouvez tester vos champs : 
        ◦ à l’envoi du formulaire grâce à l’événement submit ;
        ◦ à la saisie d’un champ du formulaire grâce aux événements input ou change.
        
    • Définissez vos expressions régulières étape par étape en vous aidant des sites ci-dessous : 
        ◦ regex101.com pour tester votre expression ;
        ◦ Regexper pour visualiser votre expression.