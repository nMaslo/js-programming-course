var a = 4.27;

console.log(Math.floor(a));
console.log(Math.ceil(a));
console.log(Math.round(a));

let broj = Math.ceil(Math.random() * 50);
console.log(broj);

console.log(Math.pow(5, 2));
// 5**3
console.log(Math.sqrt(a));
console.log(Math.min(4, 8, 1, 13, 19));
console.log(Math.max(6, 3, 5, 673, 46));
console.log(Math.PI);
console.log(Math.LN10);

var tajni_broj;
tajni_broj = Math.random() * 100;
if (tajni_broj > 50) {
  console.log("Broj je veci od 50");
} else if (tajni_broj < 50) {
  console.log("Broj je manji od 50");
}
