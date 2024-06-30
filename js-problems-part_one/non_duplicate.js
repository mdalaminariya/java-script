/**
 * array has some duplicate element..
 * []
 * eitar maddome duplicate ba ekadik bar jei upadan gulo ase oi gulo count korbe na..ar jei gulo ekbar chole geche oi guloar dorbe na..
 */


const biriyaniKhor = ['abul', 'mokbul', 'tokbul', 'abul', 'kabul', 'tokbul', 'aabul'];
const numbers = [2,3,4,5,5,4,68,4,5,66,45,68]; 

function noDuplicate (array){
    uniqe = [];
    for(const item of array){
        if(uniqe.includes(item) === false){
            uniqe.push(item);
        }
    }
    return uniqe;
};
const uniqeArray = noDuplicate(biriyaniKhor);
console.log(uniqeArray);


function noDuplicate2(numbers){
        uniqe2 = [];
    for(const number of numbers){
        if(uniqe2.includes(number) === false){
            uniqe2.push(number);
        }
    }
    return uniqe2;
}
const uniqeArray2 = noDuplicate2(numbers);
console.log(uniqeArray2);