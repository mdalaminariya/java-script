const height = [5, 65, 48, 75,6, 54, 85, 87, 90];

function getmax(numbers){
    let max = numbers[0]; //eitar maddome jokhoni kono number asbe ta max hisebe set kore rakhbe.
    for(const num of numbers){
        //console.log(num);//eitar maddome amra number ba array guloke serial wise dekhte pabo..
        if(num > max){
            max = num;
        }
    }
    return max;
}

const max = getmax(height);
console.log('max value is: ', max)

//min

const height2 = [5, 65, 48, 75, 6, 54, 85, 87, 90, 2];
function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const min = getMin(height2);
console.log('minimum number is: ', min)