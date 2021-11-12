let niz = [4, 2, 6, 3, 19, 55, 6, 26, 11, 6, 22, 6, 9];

// let a = -1;
// let b = -1;
// let c;

// for(i=0; i<niz.length; i++){
//     if(niz[i] == 4){
//         a = i;
//     }
//     else if(niz[i] == 3){
//         b = i;
//     }
// }
// if(a != -1 && b != -1){
//     c = niz[a];
//     niz[a] = niz[b];
//     niz[b] = c;

//     console.log(niz);
// }
// else{
//     console.log('Brojevi ne postoje')
// }

function zamena(a) {
  let b = -1;
  let c = -1;
  for (i = 0; i < a.length; i++) {
    if (a[i] == 4) {
      b = i;
    } else if (a[i] == 3) {
      c = i;
    }
  }
  return a;
}
console.log(zamena(niz));
