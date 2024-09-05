function myCountChar(haystack, needle) {
  let count = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      count++;
    }
  }
  console.log(`Dans le mot "${haystack}", il y a ${count} "${needle}"`);
}
myCountChar("Hello Word !", "l");
