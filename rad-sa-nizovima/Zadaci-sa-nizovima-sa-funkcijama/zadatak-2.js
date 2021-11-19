let niz = [4, 2, 6, 3, 19, 55, 6, 26, 11, 6, 22, 6, 9];

let reversedNiz = niz.map((element, i, array) => {
  return array.reverse(); // array.sort((a, b) => b - a);
});
console.log(reversedNiz);
