let tekst = "Danas je veoma tmuran i veoma uzasan dan";

let niz = tekst.split("");
let x = "a";
let y = "ab";
for (i = niz.length - 1; i >= 0; i--) {
  if (niz[i] == x) {
    niz.splice(i, 0, y);
  }
}
let string = niz.join("");
console.log(string);
