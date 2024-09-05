function myArraySort(array, sorting) {
  let listnum = [];
  for (let i = 0; i < array.length; i++) {
    listnum[i] = array[i];
  }

  let asc = "ASC";
  let desc = "DESC";

  if (sorting === asc) {
    for (let i = 0; i < listnum.length - 1; i++) {
      for (let j = 0; j < listnum.length - i - 1; j++) {
        if (listnum[j] > listnum[j + 1]) {
          let temp = listnum[j];
          listnum[j] = listnum[j + 1];
          listnum[j + 1] = temp;
        }
      }
    }
  }

  if (sorting === desc) {
    for (let i = 0; i < listnum.length - 1; i++) {
      for (let j = 0; j < listnum.length - i - 1; j++) {
        if (listnum[j] < listnum[j + 1]) {
          let temp = listnum[j];
          listnum[j] = listnum[j + 1];
          listnum[j + 1] = temp;
        }
      }
    }
  }

  return listnum;
}

console.log(myArraySort([5, 3, 8, 1], "ASC"));
console.log(myArraySort([5, 3, 8, 1], "DESC"));
