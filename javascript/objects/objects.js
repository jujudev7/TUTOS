// Un ticket de cinéma a plusieurs propriétés : un nom de film, un prix, un numéro de salle.
// Déclarez un objet ticket avec les propriétés suivantes :
// nomFilm ;
// prix ;
// numeroSalle.
// Déclarez une variable nom avec votre nom. 
// Affichez les informations sur la borne
// Affichez un message sur la borne : “Bonjour NOM, votre film NOMDEFILM est en salle NUMERODELASALLE”.
// Créez une variable texteAffichage qui contient cette phrase, avec NOM, NOMDEFILM et NUMERODELASALLE remplacés par leur vraie valeur.
// Vérifiez le résultat avec un console.log. 

const ticket = {
    nomFilm: "Yannick",
    prix: "10,50 €",
    numeroSalle: 7
}

console.log(ticket) 

// On peut ajouter une propriété à l'objet
ticket.nom = "Julien"
console.log(ticket)

// la concaténation permet d'écrire une phrase avec les différentes propriétés en accédant à la valeur via le point  .
let message = "Bonjour " + ticket.nom + ", votre film " + ticket.nomFilm + " est en salle " + ticket.numeroSalle

console.log(message)

// autre exemple
let monPersonnage = { 
    nom: "Wayne",
    prenom: "Bruce",
    age: 35,
    couleurPreferee: "noir",
    hobbies: "sortir la nuit"
    } 
    console.log(monPersonnage)
 
    // on ajoute une nouvelle propriété
    monPersonnage.vehiculePrefere = "Batmobile"
    console.log(monPersonnage)

    const nomDeMonPersonnage = monPersonnage.nom
    
    // Vérification
    console.log(nomDeMonPersonnage)
    console.log(monPersonnage.nom)
    