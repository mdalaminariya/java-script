const price = [12500, 17500, 18500, 19500, 25000, 30000];

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
        min = num;
        }
    }
    return min;
}

const cheep = getMin(price);
console.log('one of the cheppest: ', cheep);