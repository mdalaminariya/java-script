//jokhon ekta ovject er modde onno ekta object dukate chai tokhon seita nested er maddome korte hobe..eita diyew amra object change korte pari..


const collage = {
    Name: 'DNA',
    class: ['Inter fist year', 'Inter second year', 'Inter final year'],
    Events: ['Fair wall', 'Rag Day', 'Biday onushthan'],
    Uniqe: {
        color: 'Blue',
        result: {
            GPA : 5.00,
            marit : 'Top'
        }
    }
}

collage.Uniqe.result.marit = 'Top Top Top most'
console.log(collage['Uniqe'].result.marit);

collage.Events[1] = 'F Day';
console.log(collage.Events[1]);

//ei bhabe khub sohojei amra kono property / key ke delet korte pari..
delete collage.class;
console.log(collage);