let niz = [4, 2, 6, 3, 19, 55, 6, 26, 11, 6, 22, 6, 9];

/*
/*******************************
 * 
 * FIND FIND FIND FIND FIND FIND
 * 
 *******************************/

// let foundNumber = niz.find((element, i, array) => {
//   if (element > 5) {
//     if (array[i] < array[i - 1]) {
//       array[i + 1] = array[i];
//       return i;
//     }
//   }
// });
// console.log(foundNumber);
// console.log(niz);

/******************************
 *
 * REDUCE REDUCE REDUCE REDUCE
 *
 ******************************/

//1)

// let srednjaVrednost = niz.reduce((prevElement, currElement, i, arr) => {
//   return prevElement + currElement / arr.length;
// }, 0);
// console.log(niz);
// console.log(srednjaVrednost);

//2)

// let srednjaVrednost =
//   niz.reduce((prevElement, currElement, i, arr) => {
//     return prevElement + currElement;
//   }) / niz.length;
// console.log(niz);
// console.log(srednjaVrednost);

/**********************************
 *
 * FOREACH FOREACH FOREACH FOREACH
 *
 **********************************/

// niz.forEach((element, i, array) => {
//   console.log(element, i);
// });

/*********************************
 *
 * MAP MAP MAP MAP MAP MAP MAP MAP
 *
 *********************************/

// let mappedArray = niz.map((element, i, array) => {
//   return element.toString();
// });
// console.log(mappedArray);

// let mappedArray = niz.map((element) => {
//   if (element > 5) {
//     return element;
//   }
//   return null;
// });
// console.log(mappedArray);

let noviNiz = [54, 2, "Ilija", 23, "Nikola", 22, "Teodora", 19];

// let noviNiz2 = noviNiz.map((element) => {
//   if (typeof element === "string") {
//     return element.toUpperCase();
//   }
//   return element;
// });
// console.log(noviNiz2);

// let noviNiz2 = noviNiz.map((element) => {
//   if (typeof element === "number") {
//     return Math.pow(element, 4);
//   }
//   return element;
// });
// console.log(noviNiz2);

/********************************
 *
 * FINDINDEX FINDINDEX FINDINDEX
 *
 ********************************/

// let foundIndexOfNoviNiz = noviNiz.findIndex((element, i) => {
//   if (typeof element === "string") {
//     return element;
//   }
// });
// console.log(foundIndexOfNoviNiz);

/******************************
 *
 * FILTER FILTER FILTER FILTER
 *
 ******************************/

let noviNiz2 = [1, 5, 23, 64, 0, 123, 62, 9, 12, 0, -1, "Solja", ""];

// let filteredNiz2 = noviNiz2.filter((element) => {
//   return element % 2 == 0;
// });
// console.log(filteredNiz2);

// let filteredNiz2 = noviNiz2.filter((element) => {
//   return typeof element === "number";
// });
// console.log(filteredNiz2);

/******************************
 *
 * INCLUDES INCLUDES INCLUDES
 *
 ******************************/

// let keyWord = "Solja";
// let isIncluded = noviNiz2.includes(keyWord);
// console.log(isIncluded);

/******************************
 *
 * SOME SOME SOME SOME SOME SOME
 *
 ******************************/

// let isSomeElement = noviNiz2.some((element) => {
//   return element % 2 == 0;
// });
//console.log(isSomeElement);

/******************************
 *
 * EVERY EVERY EVERY EVERY EVERY
 *
 ******************************/

// let array = [4, 1, 9, 16];
// let isEveryElement = array.every((element) => {
//   console.log(Math.sqrt(element));
//   return Math.sqrt(element) % 1 == 0;
// });
// console.log(isEveryElement);
