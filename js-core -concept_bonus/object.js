//amra ekta object er modde ek ba ekadik object , array ba function kew call korte pari..

const nayok = {
    Name: 'kala',
    id: 2532,
    adress: 'afla',
    isSingle: true,
    friends: ['dola', 'mola', 'bola', 'nora'],
    movie: [{name: 'no1', year: 2045}, {name: 'nephle', year: 2024}],

    act: function(){
        console.log("I'm acting")
    },
    car: {
        band: 'hourse power',
        price: 2500000,
        color: 'black',
        made: 2024,
        manufecture: {
            made_by:'hourse power',
            ceo: 'nora',
            country: 'uganda', 
        }
    }
}
// console.log(student.car.manufecture);
console.log(nayok.act)
 nayok.act();