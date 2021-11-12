let niz = [4,2,6,3,19,55,6,26,11,6,22,6,9];

function eksponent(b){
let a = 6;
for(i = 0; i < b.length; i++){
    if(b[i] == a){
        b[i] = a**2;
    }

}
return b
}
console.log(eksponent(niz));