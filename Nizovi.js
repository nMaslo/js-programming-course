/* --------------------
        NIZOVI
----------------------*/

var firstname = "Sinisa";
let niz = ["Beograd", "NoviSad", "Kragujevac"];
let niz2 = new Array(4, 2, 7, 9, 11, 6, 5);

let niz3 = []; // new Array();
niz3[0] = "Ivana";
niz3[6] = "Sava";
niz3[0] = "Marija";
console.log(niz3);
console.log(niz[1]);

niz3.pop(); //uklanja zadnji element niza
console.log(niz3);
niz3.push("Kosta"); // dodaje element na kraju niza
console.log(niz3);
niz3.unshift("Veljko"); // dodaje ispred prvog elementa u nizu
console.log(niz3);
niz3.shift(); // uklanjanje prvog elementa u nizu
console.log(niz3);
/* NIZOVI NASTAVAK */

var voce = ["Jabuke", "Maline", "Kruske", "Breskve", "Jagode"];

// SLICE - KOPIRA ELEMENTE NIZA

let voce2 = voce.slice(2);
console.log(voce, voce2);

let voce3 = voce.slice(1, 3);
console.log(voce3);

let voce4 = voce.slice(-2);
console.log(voce4);

let voce5 = voce.slice(-4, -2);
console.log(voce5);

let voce6 = voce.slice();
console.log(voce6);

// SPLICE - SECE NIZ , BRISE ELEMENTE, DODAJE ELEMENETE

// let voce21 = voce.splice(3);
// console.log(voce21, voce)

// voce.splice(1,1);
// console.log(voce)
let novo_voce = ["mandarina", "Limun", "Kivi"];
voce.splice(3, 1, ...novo_voce); // ... spread operator
console.log(voce);

let nizZaSvoVoce = voce.concat(novo_voce);

console.log(nizZaSvoVoce, voce, novo_voce);

let sve = [...voce, ...nizZaSvoVoce];
console.log(sve);

let izokrenuto_voce = voce.slice();
izokrenuto_voce.reverse();
console.log(izokrenuto_voce, voce);

console.log(voce.toString());

sve.sort();
console.log(sve);

var loto = [3, 19, 11, 24, 6, 21, 8];
loto.sort(function (a, b) {
  return b - a;
});

console.log(loto);

let niz_od_necega = Array.from("Petak");
console.log(niz_od_necega);

let niz_od_necega2 = Array.from(loto, function (a) {
  return a * 3;
}); // sto sve puta 3
console.log(niz_od_necega2);

let string_od_niza = voce.join(" ");
console.log(string_od_niza);

let niz_od_stringa = string_od_niza.split(" ");
console.log(niz_od_stringa);

let index = voce.indexOf("Lubenica");
console.log(index);

if (voce.indexOf("Lubenica") !== -1) {
  // uradi to i to
}

let od_desne_strane = voce.lastIndexOf("Kruske");
console.log(od_desne_strane);

let niz_Gradova = [
  "Beograd",
  "Uzice",
  "Kraljevo",
  "Cacak",
  "Krusevac",
  "Sabac",
];
let novi_Gradovi = ["Valjevo", "Kursumlija", "Pirot"];
let niz_Gradova2 = niz_Gradova.splice(3, 2, ...novi_Gradovi);
let index1 = niz_Gradova.indexOf("Kraljevo");
let x = "Beograd";
let y = "Sabac";
console.log(niz_Gradova.sort((x, y) => x - y));

let saberi = (a, b) => {
  return a + b;
};

console.log(niz_Gradova, ...novi_Gradovi);

let string_niz_Gradova = niz_Gradova.join("-");
console.log(string_niz_Gradova.split("-"));
