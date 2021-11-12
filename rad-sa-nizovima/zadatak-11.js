let niz = [4,2,6,3,19,55,6,26,11,6,22,6,9];
let nizB = [];
let nizC = [];

for(i = 0; i < niz.length; i++){
    if(niz[i] > 10){
        nizB.push(niz[i]);
    }
    else if(niz[i] < 10){
        nizC.push(niz[i]);
    }
}

console.log(nizB);
console.log(nizC);
