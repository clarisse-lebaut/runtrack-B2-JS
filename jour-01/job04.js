function myArraySum(array) {
  // on déclare une variable à 0 qui vient acceullir le résulat lors de l'appel de la fonction
  let sum = 0;
  // faire une boucle dans laquelle l'itération permet de voir les nombres présent dans le tableau
  // stoper l'itération avec i++
  for (let i = 0; i < array.length; i++) {
    /*
      sum : variable qui stocke la somme accumulée des éléments du tableau
      += : opérateur d'addition et d'affectation -->
      array[i] : l'élément du tableau array à l'index i (= qui égal à 0, donc on part de 0)
      Cette ligne de code ajoute la valeur de l'élément trouvé dans le tableau entrée en paramètre 
      du tableau array à l'index i à la variable sum
    */
    sum += array[i];
  }
  // il faut stocker la variable qui va changer
  return sum;
}

console.log(myArraySum([1, 4, 5]));
