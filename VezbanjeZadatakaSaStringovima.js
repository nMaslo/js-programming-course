var tekst =
  "Neki tekst koji nam sluzi kao tekst za rad sa zadacima u JavaScript-u";

//1)

/*
let newText = tekst.toUpperCase();
console.log(newText);
*/

//2)

/*let arrayFromTekst = tekst.split(" ");
for (i = 0; i < arrayFromTekst.length; i++) {
  if (arrayFromTekst[i] == "sluzi") {
    arrayFromTekst.splice(i, 1);
  }
}
let newTekst = arrayFromTekst.join(" ");
console.log(newTekst);
*/

//3)

/*let arrayFromTekst = tekst.split("");
for (i = 0; i < arrayFromTekst.length; i++) {
  if (arrayFromTekst[i] == "i" || arrayFromTekst[i] == "a") {
    arrayFromTekst.splice(i, 1);
  }
}
let newTekst = arrayFromTekst.join(" ");
console.log(newTekst);
*/

//4)

/*
let arrayFromTekst = tekst.split(" ");
let reversedTekst = arrayFromTekst.reverse();
let newTekst = arrayFromTekst.join(" ");
console.log(newTekst);
*/

//5)

/*let arrayFromTekst = tekst.split(" ");
for (i = 0; i < arrayFromTekst.length; i++) {
  if (arrayFromTekst[i] == "tekst") {
    let sub = "sadrzaj";
    arrayFromTekst[i] = sub;
  }
}
let newTekst = arrayFromTekst.join(" ");
console.log(newTekst);
*/

//6)

let arrayFromTekst = tekst.split(" ");

for (i = 0; i < arrayFromTekst.length; i++) {
  for (j = 0; j < arrayFromTekst[i].length; j++) {
    if (j == arrayFromTekst[i].length) {
      let sub = arrayFromTekst[i][j].toUpperCase();
    }
  }
}
let newTekst = arrayFromTekst.join(" ");
console.log(newTekst);
// msm sad imam sigurno neke glupe greske jer sam nesto experimentisao
