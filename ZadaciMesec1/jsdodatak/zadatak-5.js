let array = [
  "Belgrade",
  "Vienna",
  "Washington",
  "Rome",
  "Madrid",
  "Zagreb",
  "Oslo",
  "Berlin",
];

let new_word = "";
for (i = 0; i < array.length; i++) {
  for (j = 0; j < array[i].length; j++) {
    let letter = array[i][j].charAt(0);
    new_word += letter;
  }
}

console.log(new_word);
