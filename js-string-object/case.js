const school = 'Raj uk uttora';

console.log(school);
console.log(school.toLowerCase()); //eitar maddome sokol word choto hater hobe..
console.log(school.toUpperCase()); // eitar maddome sob boro hater hobe..

const subject = 'Chemistry';
const book = 'chemistry';
// upper case like-->ABCD or lower case like--->abcd ei 2ta jodi same na hoy tahole string er khetre different value dhorbe..
if(subject.toLowerCase() === book.toLowerCase() ){
    console.log('I am reading eibar exam e fatiye felbo');
}
//jokhon amra 2ta ekoi  word lekhbo oitar first word upper or lower case holew jodi 2 ta input ke ekoi dhore sei khetre subject.tolowercase() === book.tolowercase dile meaning same hole tahole 2ta sentence ke ekoi sentence dhorbe..
else{
    console.log('hudai hudai pristha ultaie katiye dibo');
}


const drink = ' water';
const liquid = '   water  ';

if(drink.trim() === liquid.trim() ){
    console.log('ami khabo');
}
//trim() er maddome vitore jodi vule kono space pore jay tahole oita shoriye dibe..eita kaj korbe shudhu matro samne ba pore jodi kono sapce pore sei khetre vitore porle kaj korbe na..
else{
    console.log('friend ke diye dibo..');
}