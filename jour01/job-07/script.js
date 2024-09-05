function myNearZero(array) {
  let closet = array[0];

  for (let i = 1; i < array.length; i++) {
    let num = array[i];
    let closetDistance = closet >= 0 ? closet : -closet;
    let numDistance = num >= 0 ? num : -num;

    if (numDistance < closetDistance) {
      closet = num;
    } else if (numDistance === closetDistance && num > closet) {
      closet = num;
    }
  }

  return closet;
}

console.log(myNearZero([-5, 4, -895, 56]));
