const phones = [
    {name: 'Samsung', price: 20000, camera: '50mp', color: 'white/black' },
    {name: 'Oppo', price: 19000, camera: '50mp', color: 'white/black' },
    {name: 'Realme', price: 22000, camera: '50mp', color: 'white/black' },
    {name: 'Walton', price: 16000, camera: '50mp', color: 'white/black' },
    {name: 'Symphony', price: 15000, camera: '50mp', color: 'white/black' },
    {name: 'I-Phone', price: 200000, camera: '100mp', color: 'white/black' },
]

//min price phone.......ei bhabe muloto amra ekta object theke kom price er phone bahir korte pari..
function getCheepestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(min.price > phone.price){
            min = phone
        }
    }
    return min;
}

const cheep = getCheepestPhone(phones);
console.log(cheep);


//max price phone... sob theke beshi price er phone bahir korte pari..


const phones1 = [
    {name: 'Samsung', price: 20000, camera: '50mp', color: 'white/black' },
    {name: 'Oppo', price: 19000, camera: '50mp', color: 'white/black' },
    {name: 'Realme', price: 22000, camera: '50mp', color: 'white/black' },
    {name: 'Walton', price: 16000, camera: '50mp', color: 'white/black' },
    {name: 'Symphony', price: 15000, camera: '50mp', color: 'white/black' },
    {name: 'I-Phone', price: 200000, camera: '100mp', color: 'white/black' },
]


function getMaxPhone(phones1){
    let max = phones1[0];
    for(const phone of phones1){
        if(max.price < phone.price ){
            max = phone;
        }
    }
    return max;
}

const maxPrice = getMaxPhone(phones1);
console.log('High Range Phone is: ', maxPrice);