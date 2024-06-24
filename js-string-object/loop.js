const mobile = {
    Brand: 'Benco',
    Price: 12000,
    color: 'Black',
    camera: '8mp',
    isNew: true
}

//for of: Array er modde use kora hoy..
//for in: object er modde use kora hoy..


// ei poddoti te amara loop akare ekta object ke declare korte pari..

for(const prop in mobile){
    // console.log(prop);
    // console.log(mobile[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);


for(const key of keys){
    console.log(key, ':' ,  mobile[key]);//ei bhabe korle amader object er moton kore property nad value dekhiye dibe..
}