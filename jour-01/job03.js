function myIsInString(haystack, needle) {
  /* //*première boucle dans laquelle :
  
  - on initialise un compteur pour itérer dans la string haystack
  - tant que le compteur est inférieur ou égale en focntion de la longeur du mot choisis
  - on incrémente
  */
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    // on déclare une variable qui est automatiquement vrai
    let found = true;

    /*
    Dans cette boucle, on compare simpement au lettre réunis dans la boucle précédente 
    si elle sont égale à needle
    */
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        /*
        si elle le sont pas, la variable found se met à jour
        et on casse la boucle directement
        */
        found = false;
        break;
      }
    }

    // si found est toujours true après les comparatif,
    // on log true et on le stock afin de le récupérer plus tard
    if (found) {
      console.log(true);
      return;
    }
  }
  // sinon on imprime faux
  console.log(false);
}
myIsInString("Hello", "llo"); //true
myIsInString("Hello", "rele"); //false
