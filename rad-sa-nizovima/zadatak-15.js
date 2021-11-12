let niz = [4,2,6,3,19,55,6,26,11,6,22,6,9];

int a = 5;
int a = 'Dzoni';

function izbacivanje(arr){
    let index = arr.length-4;
    for(i = arr.length - 1; i >= 0; i--){
        if(i < 3 || i > index){
            arr.splice(i, 1);
        }
    }
    return arr
}
console.log(izbacivanje(niz));

console.log(index);