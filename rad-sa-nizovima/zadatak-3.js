let niz = [4, 2, 6, 3, 19, 55, 6, 26, 11, 6, 22, 6, 9];

// if (niz.length > 6) {
//     let previous = 34;
//     let helper;

//     for(i = 6; i < niz.length; i++){
//         helper = niz[i];
//         niz[i] = previous;
//         previous = helper;
//     }

//     niz[niz.length] = previous;

// } else {
//     niz[6]=34;
// }
// console.log(niz);
function ubacivanje(a) {
  a.splice(5, 0, 34);
  return a;
}

console.log(ubacivanje(niz));
