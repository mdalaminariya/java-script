/**
 * simple logic: 100% sothik noy..
 * ekta bosor leap year tokkhoni hobe jokhon oita 4 ta divide ba / kora jabe..
 */

function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

const isleap = isLeapYear(2052);
// console.log(isleap);

/**
 * 1..those year that is not divisible by 100 and if the year is divisible by 4 then it will be leap year..(jei bosor guloke 100 dhaka vag kora jay na ar 4 dhara kora jay sei gulo leap year..)
 * 2..if the year divisible by 400 , then it is leap year..(jodi year 400 dhara vag jay tahole seita leap year..)
 * 3..else it is not leap year.. (onno thay eita leap year noy.)
 */

function isleapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if( year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLeap2 = isleapYear2(1900);
const isLeap3 = isleapYear2(2100);
const isLeap4 = isleapYear2(2400);
const isLeap5 = isleapYear2(2052);
console.log(isLeap2, isLeap3, isLeap4, isLeap5);