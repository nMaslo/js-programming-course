let tekst = "Neki tekst koji nam sluzi kao teskt za rad sa zadacima u JavaScript-u";

let niz = tekst.split('');

let x = 'a';
let y = 'i';

for(i = niz.length - 1; i >= 0; i--){
    if(niz[i] == x){
        niz.splice(i, 1)
    }
    else if(niz[i] == y){
        niz.splice(i, 1)
    }
}
let text = niz.join('');
console.log(text);