let beograd = {
  brStanovnika: 1166763,
  brOpstina: 17,
  gradonacelnik: "Zoran Radojicic",
  opstine: [
    "Cukarica",
    "Zvezdara",
    "Palilula",
    "Rakovica",
    "Vozdovac",
    "Zemun",
    "Novi Beograd",
    "Mladenovac",
    "Lazarevac",
  ],
  znamenitosti: {
    muzeji: "da",
    pozorista: ["Narodno", "Jugoslovensko-dramsko", "Beogradsko"],
    spomenici: 37,
  },
};
/*for (let [key, value] of Object.entries(beograd.znamenitosti)) {
  `key: ${key} - value: ${value}`;
  console.log(`key:${key} - value:${value}`);

}
*/
for (let [key, value] of Object.entries(beograd)) {
  if (Array.isArray(value)) {
    value.forEach(function (item) {
      console.log(item);
    });
  } else if (typeof value === "object" && !Array.isArray(value)) {
    for (let [k, v] of Object.entries(value)) {
      if (Array.isArray(v)) {
        v.forEach(function (item) {
          console.log(item);
        });
      } else {
        console.log(`k: ${k} , v: ${v}`);
      }
    }
  } else {
    console.log(`k: ${key} , v: ${value}`);
  }
}

delete beograd.znamenitosti.spomenici;

beograd.znamenitosti.muzeji = "ne";

// for (i = 0; i < beograd.opstine.length; i++) {
//   console.log(beograd.opstine[i]);
// }
