let niz = [4,2,6,3,19,55,6,26,11,6,22,6,9];

function izbacivanje(a){
for(i = 0; i < a.length; i++){
    if (a[i] == 19){
        a.splice(i, 1);
    }
}
return a
}
console.log(izbacivanje(niz));