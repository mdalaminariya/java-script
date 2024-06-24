const country = 'Bangladesh';
const division = "Janu";
const district = `B-baria`; //// `---> eitake back tik bola hoy..

// const thana = new String(`Demra`); //eitar maddomew string hoy..

// console.log(thana);

//array is mutable---> eitake change kora jbe..
const numbers = [45, 53, 85, 55, 69,];
console.log(numbers);
// console.log(numbers[0]);

numbers[1] = 22; //eitar maddome amra vitorer man change korte pari..
console.log(numbers);


//string is immutable ----> immutable mane change kora jabe na..
const capital = 'Dhaka';
console.log(capital);
// console.log(capital.length); // length bolte bujay koto tuku jayga er modde word ta ase oita..
capital[1] = 'S';
console.log(capital);