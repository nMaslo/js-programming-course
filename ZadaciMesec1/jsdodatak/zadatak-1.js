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

function words(a) {
  let broj_reci = Math.floor(Math.random() * 8) + 2;
  console.log("Broj reci", broj_reci);
  let nizOdReci = [];
  let rec = "";
  for (j = 0; j < broj_reci; j++) {
    var broj_slova = Math.floor(Math.random() * 9) + 2;
    for (i = 0; i < broj_slova; i++) {
      rec += a[Math.floor(Math.random() * a.length)];
    }
    nizOdReci.push(rec);
    console.log(broj_slova);
    rec = "";
  }

  console.log(nizOdReci);
}
words(array);
// prvo i poslednje slovo upp //
