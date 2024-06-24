//valuie change er upay

const person = {
    Name: 'Alu uddin',
    age: 21,
    profession: 'Devloper',
    salary: 25000,
    married: true,
    'fav place': ['Bandhorbon', 'America', 'Africa'],
}
//ei bhabe amra kono value ke upadate or change korte pari.
person.salary = 30000;
person['age'] = 26;
person['fav place'] = ['astalia', 'maldiv', 'hongkong']

const popname = 'profession';
person[popname] = 'devops'
console.log(person)