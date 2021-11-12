var array = [
  "b",
  "c",
  "d",
  "a",
  "f",
  "r",
  "p",
  "i",
  "u",
  "o",
  "t",
  "l",
  "g",
  "m",
  "h",
  "s",
];

function wordCreate(array, wordCount, letterCount) {
  let word = "";
  let wordArray = [];
  //let wordCount = Math.round(Math.random() * 8) + 3;
  for (j = 0; j < wordCount; j++) {
    //let letterCount = Math.round(Math.random() * 8) + 2;

    for (i = 0; i < letterCount; i++) {
      let index = Math.floor(Math.random() * array.length);
      word += array[index];
    }
    if (wordArray.indexOf(word) == -1) {
    }
    let string = word.split("");
    string[0] = string[0].toUpperCase();
    string[string.length - 1] = string[string.length - 1].toUpperCase();
    let _array = string.join("");
    wordArray.push(_array);
    word = "";
  }
  return wordArray;
}
// da se ne ponavljaju slova u reci //

console.log(wordCreate(array, 6, 7));
