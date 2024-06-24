/**
 * bujte hobe claint er chahida ki or tar ki lagbe..
 * objective : ami tomake kisu array dibo oi gulor sum or + kore amake dite hobe function er maddome..
 * amra jodi kono function e kono value na dei sei khetre se undefined show korbe..
 * 
 * step-1 : declare a fanction.
 * step-2 : chacked wheter the fancion called prperly.
 * step-3 : set a perametar(s).
 * step-4 : pass the perametar(s) , check the perametar is pass in a proper format.
 * step-5 : do the fanction task (step by step).
 * 
 */

//function diye array korar subida hocche array jodi chnage kora lage tahole ta khub sohojei change kora jay er jonne ager moton kore eto program lekhar proyojon hoy na..

function sumOfArrayNumber(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number
    }
    return sum;
}
const nums = [25,36,1,4,52,1,5];
const sum = sumOfArrayNumber(nums);
console.log('array totall number is :', sum);