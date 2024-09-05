function myCountChar(haystack, needle) {
  // initialisation d'un compteur à 0 qui va compter le nombre de lettre
  let count = 0;
  // boucle for qui va itérer sur le premier paramètre : le mot choisis
  for (let i = 0; i < haystack.length; i++) {
    // si une ou plusieurs lettre dans l'index qui contient les lettres du mot sont strictement égale à la lettre recherché
    if (haystack[i] === needle) {
      // on ajoute +1 au compteur
      count++;
    }
  }
  //? 2 méhodes pour affiicher le résultat :

  //* on stocke le resultat de count
  // return count;

  //* on donne l'instruction d'impression
  console.log(`Dans le mot "${haystack}", il y a ${count} "${needle}"`);
}

//? 2 méhodes pour affiicher le résultat :
//* récupérer la valeur du return
// console.log(myCountChar("Hello Word !", "l"));

//* juste l'instruction
myCountChar("Hello Word !", "l");
