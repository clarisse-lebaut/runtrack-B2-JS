function mySquareArray(array) {
  // on souhaite un tableau
  // donc on initialise un tableau vide que notre fonction viendra remplir
  let square = [];

  // on crée un boucle for... of
  // (let num) --> on déclare une variable qui correspond au nombre présnet dans (of array) le tableau
  for (let num of array) {
    //on déclare une nouvelle variable dans laquelle on multiplie chaque numéro présent dans le tableau par lui même
    let numSquare = num * num;
    // et on rempli le tableau
    // square est la variable déclare au debut de la focntion --> le tableau vide
    //[square.length] est l'index --> c'est la valeur de la variable
    // = numSquare --> on dit simpelment que cette variable et sa longeur sont égales à la valeur de la variable numSquare
    square[square.length] = numSquare;
  }
  //on print
  console.log(square);
}

mySquareArray([1, 2, 3, 4, 5]);
