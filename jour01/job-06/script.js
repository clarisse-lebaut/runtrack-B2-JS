function mySquareArray(array) {
  let square = [];

  for (let num of array) {
    let numSquare = num * num;
    square[square.length] = numSquare;
  }
  console.log(square);
}

mySquareArray([1, 2, 3, 4, 5]);
