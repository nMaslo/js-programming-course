let niz = [4,2,6,3,19,55,6,26,11,6,22,6,9];

let nizPoz = [];
let nizNeg = [];

    nizNeg = Array.from(niz, function(a){
        return a * -1   
    })
    nizPoz = Array.from(niz);

console.log(nizNeg);
console.log(nizPoz);
