let tekst = "Neki tekst koji nam sluzi kao tekst za rad sa zadacima u JavaScript-u";

//console.log(tekst.replace(/tekst/g, 'sadrzaj'));

let niz = tekst.split(' ');

let x = 'tekst';
let y = 'sadrzaj';

for(i = niz.length - 1; i >= 0; i--){
    if(niz[i] == x){
        niz[i] = y;
    }
        
}

let text = niz.join(' ');
console.log(text);
