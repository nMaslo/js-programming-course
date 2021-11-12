let tekst = "Danas je veoma tmuran i veoma uzasan dan";

let x = "veoma tmuran";
let y = "uzasan";
let pozicijaX = tekst.indexOf(x);
let pozicijaY = tekst.indexOf(y);

let a = tekst.substr(pozicijaX, x.length);
let b = tekst.substr(pozicijaY, y.length);
let c = a.concat(" ", b);
console.log(c);
