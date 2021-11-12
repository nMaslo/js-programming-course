["cccc", "dddd", "abcd", "vvvv", "vvvv", "abcd", "dddd", "cccc"];

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

function mirrorArray(array) {
  let newArray = [];
  let word = "";
  for (i = 0; newArray.length < 4; i++) {
    for (j = 0; word.length < 4; j++) {
      let letter = Math.floor(Math.random() * array.length);
      word += array[letter];
    }
    newArray.push(word);
    word = "";
  }

  let reversedArray = [...newArray];
  newArray.reverse();
  let fusedArray = [...newArray, ...reversedArray];

  return fusedArray;
}
console.log(mirrorArray(array));
