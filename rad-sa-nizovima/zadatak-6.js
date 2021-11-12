let niz = [4,2,6,3,19,55,6,26,11,6,22,6,9];

function zamena(a) {
    let b = a.sort(function(a,b){
        return a-b;
    })
console.log(b)
    let min = b[0];
    let max = b[b.length-1];

    for(var i = b.length -1; i>=0; i--){
        if(b[i]== min){
           b[i]= max;
        }else if(b[i]==max){
           b[i]= min;
        }
    }
    console.log(b)
}

zamena(niz)