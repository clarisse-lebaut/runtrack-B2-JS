function myPrimeList(limit) {
  let primes = [];

  for (let num = 2; num <= limit; num++) {
    let isPrime = true;

    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes[primes.length] = num;
    }
  }
  return primes;
}

console.log(myPrimeList(25));
