function myPrimeList(limit) {
  // déclarer une variable qui prend comme valeur un tableau vide
  // dans ce tableau il y aura le résulat de la fonction
  let primes = [];
  // création d'une boucle pour trouver les nombre premier
  // on part du nombre 2 car un nombre est forcément divisible par 1
  // tant que que num n'a pas divisé trouver le dernier nombre de la limite passé en paramètre il contniue de chercher
  // num++ permet de stoper une fois la limite donnée atteinte

  for (let num = 2; num <= limit; num++) {
    //on déclare une variable qui est true par défaut
    // c'est a dire que les nombres sont premier par défaut

    let isPrime = true;
    // Deuxième boucle dans laquelle on vérifie si num est divisible par un autre nombre

    for (let i = 2; i <= num / 2; i++) {
      // si le reste de la divsion de num et i est strictemetn égale à 0
      if (num % i === 0) {
        // mise a jour de la variable isPrime qui devient false
        isPrime = false;
        // et on casse la boucle
        break;
      }
    }

    // si la variable est true, autrement que le nombre est premier
    if (isPrime) {
      // on crée un tableau dans lequel on injecte les nombres premier trouvée
      // l'ajout de nombre dans le tableau [primes.length] se fait grâce à l'index fait dans les boucles 
      primes[primes.length] = num;
    }
  }
  // Afficher les nombres premiers dans la console
  return primes;
}

console.log(myPrimeList(25));
