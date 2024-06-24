const person = {
    Name: 'Alu uddin',
    age: 21,
    profession: 'Devloper',
    salary: 25000,
    married: true,
    'fav place': ['Bandhorbon', 'America', 'Africa'],
}
// console.log(person);
//nirdisto kisu dekhtechaile ba ekta upadan shudhu dekkhte chaile ei bhabe dekha jabe..ei podditi ke bole .

// dot notation mane dot diye man newa..

// console.log(persion.Name);

const income = person.salary;//eiotar maddome amra ekta object ke varriable e rakhte pari..
// console.log(income);


//braket notation
//third bracket er maddome access kora..

// console.log(person['age']);

const boyos = person['age'];
// console.log(boyos);


// console.log(person.fav place); eibhabe dile ba maj khane coma dile ei khetre error dekhabe..ei khetre third bracketr must be used korte hobe..
console.log(person['fav place']);


const keyName = 'profession';
console.log(person[keyName])