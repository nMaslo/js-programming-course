let niz = new Array();
let niz2 = [];
console.log(typeof niz2, typeof niz);

let a = 4;
console.log(typeof a);
console.log(a.toFixed(2));

let aa = new Number(5);
console.log(typeof aa);

let text = "Utorak";

let text2 = new String("dan");

let person = {};
person.name = "Jovan";
person.last_name = "Simic";
console.log(person);

let school = {
  naziv: "ETF",
  smer: "Softversko inzenjerstvo",
  cena: 240000,
  "dekan nastave": "Milorad Jovic",
  podaci: {
    broj_studenata: 800,
    naziv: "neki naziv",
    master: "da",
    razmena_studenata: "da",
    upis: true,
    print: function () {
      let naziv = "da i ne";
      console.log(school.naziv);
    },
  },
};

school.adresa = "Bulevar Kralja Aleksandra 12";

school.naziv = "FON";
console.log(school);

let stringText = "smer";

console.log(school["dekan nastave"]);

console.log(school[stringText]);
// console.log(school['smer']);

person["preostali ispiti"] = ["Matematika", "Programiranje 3", "Baze podataka"];
person.birdthDate = new Date("1986", "03", "16");
person.info = {
  godina: "II",
  finansiranje: "budzet",
  studentski_dom: "ne",
  pocetak_studija: 2016,
};
console.log(person);

school.podaci.print();

console.log(school.podaci["razmena_studenata"]);

delete school.podaci.razmena_studenata;

console.log(school);

// kljucevi objekata
// for (let key of Object.keys(school)) {
//   console.log(key);
// }

// vrednosti objeksta
// for (let value of Object.values(school)) {
//   if (typeof value !== "object") {
//     console.log(value);
//   } else {
//     for (let value2 of Object.values(value)) {
//       if (typeof value2 !== "function") {
//         console.log(value2);
//       }
//     }
//   }
// }

// for (let [key, value] of Object.entries(school)) {
//   console.log(`Key: ${key} - value: ${value}`);
// }

console.log(person);

for (let [kljuc, vrednost] of Object.entries(person)) {
  if (typeof vrednost !== "object") {
    console.log(`k : ${kljuc} - v: ${vrednost}`);
  } else {
    for (let [k, v] of Object.entries(vrednost)) {
      if (Array.isArray(vrednost)) {
        vrednost.forEach((item) => console.log(item));
      } else {
        console.log(`${k}- ${v}`);
      }
    }
  }
}
