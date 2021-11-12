/* FOR PETLJA */

//for(pocetno stanje, uslov, uvecanje){}

/*for(let i = 10; i>0; i--){
    document.write('<p>ja se zovem Nikola</p>')
}
*/

// for(let i = 1; i <= 10; i++){
//     if(i == 6){
//    continue;
//     }else if(i > 4){
//         break;
//     }
    
//     else {
//         document.write('<p>'+i+'</p>')
//     }
   


// }






document.write('<ul>')
for(let m = 1; m<=20; m++){
    if(m > 10 && m <16){
        continue;
    }else if(m == 19){
        break;
    }
    document.write('<li>'+m+' Nikola'+'</li>');
}
document.write('</ul>')


