let tekst = "Danas je veoma tmuran i veoma uzasan dan";
let tekst1 = "Vreme je kisovito i duva jaka vetrina";

x = tekst.split(" ");
y = tekst1.split(" ");

let t = x[x.length - 1];
let t1 = y[y.length - 1];
x[x.length - 1] = t1;
y[y.length - 1] = t;
let i = x.join(" ");
let j = y.join(" ");
console.log(i);
console.log(j);
