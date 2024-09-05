function myUpperCase(string) {
  const min = "abcdefghijklmnopqrstuvwxyz";
  const maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < string.length; i++) {
    let found = false;

    for (let j = 0; j < min.length; j++) {
      if (string[i] === min[j]) {
        result += maj[j];
        found = true;
        break;
      }
    }
    if (!found) {
      result += string[i];
    }
  }
  console.log(result);
}

myUpperCase("Hello Word");
