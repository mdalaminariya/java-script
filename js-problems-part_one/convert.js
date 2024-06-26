// 12 inch----->1 feet..
//ei bhabe amra ekta manush er height ba inch theke feet e convert korte pari....

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

const personHeight = inchToFeet(75);
// console.log(personHeight);


function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchremain = inch % 12;
    const result = feetNumber + ' feet ' + inchremain + ' inch ';
    return result;
}

const personHeight2 = inchToFeet2(75);
console.log(personHeight2);


//mile to km convert..

function mileToKiloMeter(mile){
    const kilo = mile * 1.60934;
    return kilo;
}

const distance = mileToKiloMeter(125);
console.log('eto kilo meter', distance);

//kilo meter to mile

function kilometerToMile(kilo){
    const mile = kilo * 0.621371 ;
    return mile;
}

const distance2 = kilometerToMile(125);
console.log(distance2);