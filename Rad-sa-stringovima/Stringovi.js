let tekst = 'Danas je veoma tmuran i veoma kisovit dan';

// console.log(tekst.length)

// console.log(tekst.toUpperCase())
// console.log(tekst.toLowerCase())

// console.log(tekst.slice(10,20))
// console.log(tekst.slice(-18,-10))
// console.log(tekst.substring(10,20))
// console.log(tekst.substr(10,20))
// console.log(tekst.charAt(3))

// let tekst2 = ' I sutra ce biti isto';

// console.log(tekst.concat(tekst2))
// console.log(tekst+tekst2)

// console.log(tekst.indexOf('veoma'))
// console.log(tekst.lastIndexOf('veoma'))

// console.log(tekst.search('veoma'))

// console.log(tekst.replace('veoma', 'malo')) // menja jednu prvu koju pronadje
// console.log(tekst.replace(/veoma/g, 'malo')) // menja sve nadjene varijante

// console.log(tekst.repeat(4))

// console.log(tekst.includes('dan'))

// console.log(tekst.startsWith(' Danas'))
// console.log(tekst.endsWith(' dan'))
// console.log(tekst.trim()) 

// let tekst3 ='XXL'
// console.log(tekst3.padStart(10,'*'))
// console.log(tekst3.padEnd(10,'*'))
// let niz = tekst.split(' ')
// console.log(niz)
// let text = niz.join(' ')
// console.log(text)

// for(var i = 0; i<tekst.length-1; i++){
//     if(tekst[i]== 't'){
//         tekst[i] = 'r'
//     }
//     console.log(tekst[i])
// }


// let x = tekst.split(' ')
// let z = x.reverse();
// let y = z.join(' ')
// console.log(y);

let x = tekst.split(' ');
let a = x[1];
let b = x[x.length - 2];
console.log(a,b)
for(i = 0; i < x.length; i++){

    if(x[i] == a){
        x[i] = b
    }
    else if(x[i] == b){
        x[i]=a
    }
}
let y = x.join(' ');
console.log(y);