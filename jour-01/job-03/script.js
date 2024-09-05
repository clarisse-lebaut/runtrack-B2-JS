function myIsInString(haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let found = true;

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        found = false;
        break;
      }
    }

    if (found) {
      console.log(true);
      return;
    }
  }
  console.log(false);
}
myIsInString("Hello", "llo");
myIsInString("Hello", "rele");
