function verifierNom(string) {
    if (string.length < 2) {
        throw new Error(`La chaîne ${string} est trop petite !`)
    }
}

try {
    verifierNom("David")
    verifierNom("A")

} catch(erreur) {
    // console.log("il y a une erreur")
    console.log(erreur)
}