function myArraySort(array, sorting) {
  // Initialisation manuelle de listnum afin de stocker les numéros dans un tableau vide
  let listnum = [];
  //! Copier les éléments de array dans listnum pour ne pas modifier le tableau original
  for (let i = 0; i < array.length; i++) {
    listnum[i] = array[i];
  }

  // Déclaration des variables pour les ordres de tri
  let asc = "ASC";
  let desc = "DESC";

  //*TODO : on fait deux bloc de condition --> un si le tri est ascendant et un si le tri est descendant
  
  // Tri pour ordre croissant
  if (sorting === asc) {
    /**
     * *Boucle 1 (i) :
     * Cette boucle traverse tous les éléments du tableau
     * et permet de réduire le nombre de comparaisons à chaque itération,
     * car les plus grands éléments se déplacent vers la fin du tableau.
     *
     * ?on fait la chose suivante :
     * ? let i = 0 --> initialise un compteur pour itérer dans le tableau
     * ? i < listnum.length --> tant que le compteur n'est pas arrivé au bout de la longeur du tableau on continue
     * ? i++ --> on stop le compteur
     */
    for (let i = 0; i < listnum.length - 1; i++) {
      /**
       * *Boucle 2 (j) : 
       * Cette boucle compare les éléments adjacents et
       * échange leurs positions si l'élément précédent est plus grand
       * que l'élément suivant.
       */
      for (let j = 0; j < listnum.length - i - 1; j++) {
        // Comparer les éléments adjacents
        //? si les nombres de la nouvelles liste sont plus grand que les nombres de liste avec l'index + 1
        if (listnum[j] > listnum[j + 1]) {
          // Condition qui échanger les éléments si nécessaire
          let temp = listnum[j]; // Stocker l'élément actuel
          listnum[j] = listnum[j + 1]; // Remplacer l'élément actuel par l'élément suivant
          listnum[j + 1] = temp; // Placer l'élément stocké à la position suivante
        }
      }
    }
  }

  // Tri pour ordre décroissant
  if (sorting === desc) {
    /**
     * *Boucle 1 (i) :
     * Cette boucle traverse tous les éléments du tableau
     * comme précédemment, mais cette fois pour l'ordre décroissant.
     */
    for (let i = 0; i < listnum.length - 1; i++) {
      /**
       * *Boucle 2 (j) :
       * Compare les éléments adjacents et échange leurs positions
       * si l'élément précédent est plus petit que l'élément suivant.
       */
      for (let j = 0; j < listnum.length - i - 1; j++) {
        if (listnum[j] < listnum[j + 1]) {
          let temp = listnum[j];
          listnum[j] = listnum[j + 1];
          listnum[j + 1] = temp;
        }
      }
    }
  }

  // Retourner le tableau trié
  return listnum;
}

console.log(myArraySort([5, 3, 8, 1], "ASC"));
console.log(myArraySort([5, 3, 8, 1], "DESC"));
