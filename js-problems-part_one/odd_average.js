/**
 * ei poddo tite amra kono swongkhar average koto ba gor koto ta bahir korte pari..
 * function take an array as parameter..(function array ke parameter e dhorbe..)
 * give me the average number of the odd number in the array..(amake bejor songkha gulor gor dawa array theke..)
 */

/**
 * 1..put odd number is an array..(amra odd number guloke array er modde rekhe dei..)
 */

function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            // console.log(number);
            odds.push(number);
        }
    }
    //shudhu matro odd songkhagulo ei khane ase..
    // console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log('sum is: ', sum, 'lenght is:', count);
    const avg = sum / count;
    return avg;
}
 const numbers = [4, 3, 45, 22, 53, 81, 7, 57];
const avg = oddAverage(numbers);
console.log('average of the odd number is: ', avg);
