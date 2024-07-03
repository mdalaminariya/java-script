//jokhon 3 joner modde ke boro ta dekhte hoy sei khetre ei niyom...

const cow = 59;
const dog = 89;
const cat = 90;

if(cow > dog && cow> cat){
    console.log('cow the best')
}
else if(dog > cow && dog > cat){
    console.log('dog the hero')
}
else{
    console.log('cat the leader')
}


//function

function numOfThree(cow, dog, cat){
    if(cow > dog && cow > cat){
        console.log('cow won the race')
        return cow;
    }
    else if(dog > cow && dog > cat){
        console.log('dog won the race')
        return dog;
    }
    else{
        console.log('cat won the race')
        return cat;
    }
}

const higest = numOfThree(78, 89, 55);
console.log('Congratulation', higest);