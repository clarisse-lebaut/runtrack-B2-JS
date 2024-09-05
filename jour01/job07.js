function myNearZero(array) {
  // Initialiser la variable `closet` avec le premier élément du tableau.
  // Elle stockera le nombre le plus proche de zéro trouvé jusqu'à présent.
  let closet = array[0];

  // Boucle à partir du deuxième élément du tableau (i = 1),
  // jusqu'à la fin du tableau (i < array.length).
  for (let i = 1; i < array.length; i++) {
    // `num` prend la valeur de chaque élément du tableau à chaque itération.
    let num = array[i];

    // Calculer les valeurs absolues manuellement pour `closet` et `num` :
    // Condition ternaire
    // Si le nombre est négatif, on prend son opposé (c'est-à-dire sa valeur positive).
    let closetDistance = closet >= 0 ? closet : -closet;
    let numDistance = num >= 0 ? num : -num;

    // Comparer les distances :
    // Si la distance de `num` à zéro est plus petite que celle de `closet`,
    // on met à jour `closet` pour qu'il prenne la valeur de `num`.
    if (numDistance < closetDistance) {
      closet = num;
      // Si les distances sont égales, mais que `num` est positif,
      // on choisit `num` comme nouvelle valeur de `closet` (pour préférer le nombre positif).
    } else if (numDistance === closetDistance && num > closet) {
      closet = num;
    }
  }

  return closet;
}

console.log(myNearZero([-5, 4, -895, 56]));
