// const math = {
//     min: function min (num1, num2){
//         return num2;
//     }
// }
// console.log(math.min);

// sob theke choto ba boro songkha bahir korar niyom..eitar maddome amra ekta array hote choto ba boro songkha bahir korte pari
//ei khetre math e first letter obossoi boro hater hote hobe..-->Math..

const min = Math.min(8, 5, 2, 86, 78, 59, 1);
console.log(min);
const max = Math.max(8, 5, 2, 86, 78, 59, 1);
console.log(max);

// pai er man koto dekhar jonne ei poddoti..
console.log(Math.PI);

//eitar maddome negative konop value ba - jukto kono songkha dile oitakew possibe ba + baniye dibe..and eitar maddome amra 2 ta songkhar modde different koto taw bahir kore dibe..
console.log(Math.abs(-58));
console.log(Math.abs(80-58));

// eita muloto ekta dosomik ba 2.5 ei typer value guloke ekta vognagse ba purno songkhay rupantor korar kaje use kora hoy..
console.log(Math.round(4.25));
console.log(Math.round(4.85));

// eita muloto ekta value er doshomik er porer ongshoke namiye ekta purno songkhate rupantor kore ..eita muloto niche namiye dey..
console.log(Math.floor(2.99));

//eita muloto ekta value er doshomik er porer ongshoke bariye ekta purno songkhate rupantor kore ..eita upore tule dey..
console.log(Math.ceil(6.1));


// eitar maddome  amra ekta random number pete pari..doshomik jukto 10 er modde....
console.log(Math.random()*10);

// eitar maddome amra 10 er modde je kono ekta random number ba value pete apri..
const rand = Math.round(Math.random()*10);
console.log(rand);