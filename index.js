let name = "asdasd";
name = "qweqwe";
let myFirstName='Ivan'
document.write(name);

myFirstName='Petar';

let a = 30;
document.write(typeof a);
let b = 5;
let c = a % b;
document.write(c);
let lastname = 'Peric';
let fullName = myFirstName + " " + lastname;
document.write("<p>" + fullName + "</p>");

if(a > 30 && b > 5){
    document.write("broj je veci od 30");
    }
    else if(a === 30 && b === 5){
        document.write("broj je jednak 30");
    }
    else{
        document.write("broj nije veci od 30");
    }
    

let password1 = 'Pera23423'
let password2 = 'Pera23423'

if(password1 != ''){
    if(password2 !=''){
        if(password1 == password2){
            document.write('Passwords matched')
        }else {
            document.write('Password1 and password2 are not same')
        }
    }else {
        document.write('Password 2 is empty')
    }
}else {
    document.write('Password 1 is empty')
}

// zenska osoba, do 35 godina, da je pozicija daktilograf 
let pol = 'zenski'
let posao = 'pravnik';
let age  = 30;

if(pol == 'zenski'){
    if(posao == 'daktilograf'){
        if(age <= 35){
            document.write('zaposleni odgovara opisu posla')
        }else{
            document.write('Ne odgovara godine')
        }
    }
    else{
        document.write('Ne odgovara posao')
    }
}else{
    document.write('Ne odgovara pol')
}

let auto = 'Reno';
let model = 'Polo'

switch(auto) {
    case 'Opel':
        document.write('Opel auto');
    break;
    case 'VW':
        if(model == 'Pole'){
            document.write('VW auto')
        }else {
            document.write('Mozda golf')
        }
        break;
    case 'Mercedes':
        document.write('Mercedes auto');
    break;
    case 'Peugeot':
    case 'Reno':
    case 'Citroen':
        document.write('Francuski auto');
    break;
    default:
        document.write('Neki drugi auto');
}

let user = 'Jovan Jovanovic';
let mediator = true;

//let current_user = user == 'Jovan Jovanovic' ? 'Welcome admin': 'Welcome users';
let current_user = user == 'Jovan Jovanovic' ? 'Welcome admin': mediator ? 'You are mediator': 'You are user';

document.write(current_user)

function sabiranje(broj1=13, broj2=5){
    let a = 8;
    let c = broj1+ broj2 + a;
    return  c 
}

sabiranje(3,7);
sabiranje(17,9);
sabiranje(4,7);
sabiranje(undefined, 12)

function ime(mojeime){
    document.write('<div>Red koji se ne prikauje</div>')

    return '<p>Moje ime je '+mojeime + '</p>';
}

//ime('Jovan')
let mojeIme = ime('Vlada')
document.write(mojeIme)



function osoba(imeOsobe, godOsobe){

    return '<p>Ime i godine osobe: '+imeOsobe +' ' + godOsobe+ '</p>'
}

let imeOsobe = osoba('Nikola', 23);
document.write(imeOsobe);

function deljenjeBrojeva(broj){
    return broj /4;
}

console.log(deljenjeBrojeva(18))
console.log(deljenjeBrojeva(age))
console.log(deljenjeBrojeva(sabiranje(34,55)))

function karakteri(k1, k2, k3, k4){
    return k1+k2+k3+k4;
}

function prikaz(k){
    document.write(k);

}

prikaz(karakteri('f', 'l', 'a', 'g'));


function nazivTelefona(t1, t2, t3, t4){
    // let lista = `<ul>
    //                 <li>${t1}</li>
    //                 <li>${t2}</li>
    //                 <li>${t3}</li>
    //                 <li>${t4}</li>
    //             </ul>`
    let lista = '<ul>';
        lista +=`<li>${t1}</li>`;
        lista +=`<li>${t2}</li>`;
        lista +=`<li>${t3}</li>`;
        lista +=`<li>${t4}</li>`;
    // return '<ul><li>'+t1+'</li>'+'<li>'+t2+'</li>'+'<li>'+t3+'</li>'+'<li>'+t4+'</li></ul>'
    return lista;
}

document.write(nazivTelefona('Huawei','Samsung', 'Motorola', 'Apple'));

let ab = 5;
ab = ab+ 2;
ab += 2;
ab -= 2;
ab *= 4;
ab /= 5;

let f = 5;
let d = f++; //5,6
 d = f++; //6,7
//let d = ++f;
console.log(f, d)

function zadatak(n, m){ 
    if(n > m){
        n -= 2;
    }
    else if(n < m){
        n++;

    }
    return n;
}

document.write(zadatak(6,8));






let pass1 = 12345;
let pass2 = 12345;

if(pass1 != ''){ //sto !=?
    if(pass2 != ''){
        if(pass1 == pass2){
            document.write('<p>'+'Pass1 matches pass2'+'</p>');
        
        }
    else{
        document.write('<p>'+'Pass 1 doesnt match pass 2'+'</p>'); 
        }
    }
else{
    document.write('<p>'+'Pass2 is empty'+'</p>');
}
}
else{
    document.write('<p>'+'Pass1 is empty'+'</p>');
}


