let niz = [4,2,6,3,19,55,6,26,11,6,22,6,9];

function sortiranje(){
    let nizB = [...arguments];
    nizB.sort(function(a, b){
        return b - a
    })
    return nizB
}

console.log(sortiranje(56,23,5,7,9, 222, 434, 2, 1));


