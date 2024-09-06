//* Avec fonction native : toUpperCase()
function myUpperCaseOne(string) {
  console.log(string.toUpperCase());
}

myUpperCaseOne("Doctor Who");

//* Sans fonction native
function myUpperCase(string) {
  // on déclare une constante dans laquelle on stocke les minuscule
  const min = "abcdefghijklmnopqrstuvwxyz";
  // on déclare une constante dans laquelle on stocke les majuscules
  const maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // on déclare une chaine de caractère vide dans laquelle la string pararmétrer viendra se mettre
  let result = "";

  // boucle for : parcours toute les lettres du mot entrée dans le paramètre lors de l'appel de la fonction
  for (let i = 0; i < string.length; i++) {
    // on initialise le fait que les lettres ne sont pas correspondant au début de l'itration de la boucle
    // elle sera changé dès qu'une lettre entre la string et min sera trouvé
    let found = false;

    // seconde boucle for : parcours toutes les lettres dans la constante min pour trouver une correspondance
    for (let j = 0; j < min.length; j++) {
      // si il y a correspondance
      if (string[i] === min[j]) {
        // alors la majuscule est ajouté dans un tableau
        result += maj[j];
        // lorsque found est trouvé, on met à jour son paramètre
        found = true;
        //! sortir de la boucle une fois la lettre trouvé, et recomencé tant que toute la longeur de la chaîne de caractère n'a pas été vérifié
        break;
      }
    }
    //* si le caractère n'est pas une minuscule
    if (!found) {
      // la remplacer par un majuscule l'index
      result += string[i];
    }
  }
  // on print le la string result(stocké plus haut) dans le console du navigateur
  // les lettres seront en majuscule
  console.log(result);
}

myUpperCase("Hello Word");
