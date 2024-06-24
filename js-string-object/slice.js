const address = 'andhorkila';
const part = address.slice(2,6); //slice er maddome amra ekta nirdisto jayga porjonto output dekhte pari..er modde 2 ta man thakbe 1st er ta start and next er ta end er ager man porjonto dhorbe..
// console.log(part);


// const sentence = 'I am a good person';
//console.log(sentence.split('a')); 
//jodi split er por bracket er modde kisui na dewa hoy () tahole oita ekoi line er ekta array dibe or jodi bracket er modde ('') colon dewa hoy tahole protita word ke alada alada dekhabe or jodi bracket er modde colon 2tar maje space dewa hoy or ekta nirdisto word dewa hoy (' ') tahole full sentence er maje jei space gulo or jei word gulo thakbe oi gulo ke bad diye ekta output dibe..

const friendstr = 'kalam,jalam,balka,chalka,marka';
const friends = friendstr.split(','); //eitar maddome protita value ke alada alada sentence kore array make korbe..
// console.log(friends);

const realfriend = [ 'kalam', 'jalam', 'balka', 'chalka', 'marka' ];
//joint er maddome amader ekadik sentence ke songjukto er kore thake ekta array make korbe.. 
console.log(realfriend.join());
console.log(realfriend.join('|'));
console.log(realfriend.join('-'));