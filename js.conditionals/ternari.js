/**
 * TERNARY---Three parts  eita 3 ti part e sesh hoy.
 *  ?    :
 * condition ? do something when true : do something when false (contion sotti hole colone er age ar question er pore..ar condition mittha hole colone er pore )
 */

//const age = 20;
// if(age > 18){
//     console.log('you can vote');
// }
// else{
//     console.log('you can not.')
// }

//simple ternary
// age >= 18 ? console.log('vote dio') : console.log('ghumai ja');

let price = 500;
const isLeader = false;

if(isLeader === true){
    price = 0;
}
else{
    price = price + 100;
}
console.log(price);

price = isLeader === true ? 0 : price+ 100;

//semi-advance

if(isLeader === true){
    if(price = 1000){
        price = price/2
    }
    else{
        price=0;
    }

}
else{
    price=price;
}


//fell free to ignore this
price = isLeader === true ?
                     price =1000 ?
                         price/2 :
                                 0 : 
                        price + 500;