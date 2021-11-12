let brojevi = [23, 54, 12, 66, 77, 34, 3, 7, 92, 41];
/*for (let i = brojevi.length; i > 0; i--) {
  if (brojevi[i] > 50) {
    brojevi.splice(i, 1);
  }
}
console.log(brojevi);
*/
// sve neparne zameniti sa brojevima koji su duplo manji od postojeceg

/*for (let x = brojevi.length; x > 0; x--) {
  if (brojevi[x] % 2 == 1) {
    brojevi[x] = brojevi[x] / 2;
  }
}
console.log(brojevi);
*/
/*let brojevi1 = [];
for (let x = brojevi.length - 1; x > 0; x--) {
  if (brojevi[x] % 2 == 0) {
    brojevi1.push(brojevi[x]);
  }
}
console.log(brojevi1);
*/

// function napraviNiz(a, b, c, d) {
//   return arguments;
// }

// let niz = napraviNiz(4, 77, 4, 43, 788, 58, 8);
// //console.log(niz);




// let array = [2, 6, 34, 53, 67, 46, 12, 81];

// for(i = array.length - 1; i>=0; i--){
//   if(array[i] % 2 != 0){
//     array.splice(i, 1);
//   }
  
// }
// console.log(array);


// let promenljiva = 'Neki malo malo malo duzi tekst';
// let nizOdProm = promenljiva.split(' ');
// for(i = nizOdProm.length - 1; i>=0; i--){
//   if(nizOdProm[i] == 'malo'){
//   nizOdProm.splice(i, 1);

//   }
// }
// let promenljiva1 = nizOdProm.join(' ');
// console.log(promenljiva1);



// let niz1 = [1, 3, 6, 12, 63, 64, 73];
// let niz2 = [23, 54, 64, 34, 635];



// function spojNizova(a, b){
//   return [...a, ...b];
// }
// let niz1 = [4,3,63,6]; 
// let niz2 = [2,4,7]
// let spoj = spojNizova(niz1, niz2)
// console.log(spoj)

function funkcija(){
  return arguments;
}
let niz = funkcija(2, 3, 4, 5);
console.log(niz);

let ime = 'Milos';
let prezime = 'Peric';
let email = 'email@gmail.com';
let password = 'Milos1234'

function osoba(a, b, c, d){
  let podaci = [...arguments]
  return podaci;
}
console.log(osoba(ime, prezime, email, password))


let niz1 = [1,2,3,6,9,4,5]
let niz2 = []

for(i = 0; i<niz1.length; i++){
  if(i< 2 || i > niz1.length - 3){
    niz2.push(niz1[i]) 
  }
}
console.log(niz2);

