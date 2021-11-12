let niz = [4,2,6,3,19,55,6,26,11,6,22,6,9];

// let nizB = [];
// let nizC = [];

// for(i = niz.length - 1; i >= 0; i--){
//     if(niz[i] % 2 == 0){
//     nizB.push(niz[i]);
//     }
//     else if(niz[i] % 2 != 0){
//         nizC.push(niz[i]);
//     }
// }
// console.log(nizB);
// console.log(nizC);
// console.log(niz);
let nizB = [];
let nizC = [];
function razdvajanjeNiza(a,b, c){
        for(i = a.length - 1; i >= 0; i--){
                if(a[i] % 2 == 0){
                    b.push(a[i]);
                }
                if(a[i] % 2 !== 0){
                    c.push(a[i]);
                }
    }
 console.log(nizB, nizC)

}
(razdvajanjeNiza(niz,nizB, nizC))



