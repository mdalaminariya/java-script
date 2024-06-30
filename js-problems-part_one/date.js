//ei podddotite amra date bahir kore pari..

const today = new Date();
const date = new Date('2022-5-18');
console.log(date.getMonth());
console.log(date.getDay());

const specificentDate = new Date(2095, 0, 28);
console.log(specificentDate);

//eitar maddome amra month set kore dite pari..eita index er 0 theke start hoye thake..
specificentDate.setMonth(10);
console.log(specificentDate);

//eitar maddome amra ekta date ke guchate pari ba shundhor kore sajiye likhte pari amder country  er niyom e..
console.log(specificentDate.toLocaleString('eng-GB'));

//unix ecop eita muloto 2 ta somoy er modde compare korar jonne use kora hoy..