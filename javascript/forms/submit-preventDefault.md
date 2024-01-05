# Soumettre un formulaire
## Appréhender le fonctionnement client/serveur
Pour comprendre la particularité de l'événement submit, il est important de comprendre comment fonctionne un site web.  

    1. Votre navigateur (Chrome ou Firefox, par exemple) est un client. Il envoie une requête HTTP à un serveur pour demander des ressources telles qu’une page HTML, un fichier CSS ou un script JavaScript.

    2. Le serveur reçoit la requête et la traite à l’aide d’un langage “serveur” (PHP, Python, Node.js…), et retourne une réponse. 

    3. Lorsque le navigateur reçoit le fichier, il l’interprète et affiche la page. 

Le principe est le même lorsqu’une page HTML affiche un formulaire :  

    1. L'événement submit est lancé au clic sur le bouton “Envoyer”. 
    2. Le navigateur envoie les données au serveur.
    3. Le serveur les interprète, et retourne une nouvelle page à afficher. 

Par conséquent, la page est rechargée au clic sur le bouton Envoyer.

 Cependant, lorsque nous traitons nous-mêmes le contenu du formulaire en JavaScript, l’événement submit pose un problème. Étant donné que l’événement a envoyé des données et récupéré une réponse du serveur, il provoque un rechargement de la page.

**Le rechargement de la page empêche l’exécution du code !**  
Pour traiter nous-mêmes le contenu du formulaire, nous devons donc empêcher ce comportement par défaut, et dire au navigateur “Inutile d’envoyer des données au serveur, nous allons gérer nous-mêmes cet événement submit”. 

## Empêcher le comportement par défaut de l'événement “submit”
Nous l’avons vu, l’événement **submit** a ceci de particulier qu’il provoque un rechargement automatique de la page lorsqu’il est envoyé. Exemple de comment gérer ce comportement :
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
Lorsque l’on clique sur le bouton **Envoyer**, l’événement submit est envoyé, et le navigateur veut envoyer les données au serveur et réafficher la page. 
Pour empêcher ce comportement par défaut, nous allons donc :
    • écouter cet événement submit ;  
    • empêcher ce comportement grâce à la méthode preventDefault. *Exemple :*
```
    const form = document.querySelector('form');

    // Quand on submit
    form.addEventListener("submit", (event) => {
        // On empêche le comportement par défaut
        event.preventDefault();
        console.log("Il n’y a pas eu de rechargement de page");
});
```
Une fois que nous avons rédigé le **preventDefault**, nous pouvons traiter le contenu du formulaire. Par exemple, en affichant les valeurs du formulaire dans un console.log :
```
form.addEventListener("submit", (event) => {
    // On empêche le comportement par défaut
    event.preventDefault();
    console.log("Il n’y a pas eu de rechargement de page");

    // On récupère les deux champs et on affiche leur valeur
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    console.log(nom);
    console.log(email);
});
```
Ici, au clic sur **Envoyer**, la valeur du nom et de l’e-mail apparaît dans la console. Bien sûr, vous pouvez insérer ici le traitement de votre choix au lieu d’un console.log.

## En résumé
    • Un navigateur est un client HTTP. Il fait appel au serveur pour récupérer les informations sur la page qu’il veut afficher.

    • Lorsqu’un utilisateur valide un formulaire, l’événement submit est envoyé. 

    • Lorsqu'un événement submit est envoyé, par défaut, il provoque un appel au serveur. Cela génère un rechargement de la page qui empêche l'exécution du code.

    • Pour éviter ce comportement par défaut : 
        ◦ écoutez l’événement submit ;
        ◦ empêchez le comportement avec la méthode preventDefault.