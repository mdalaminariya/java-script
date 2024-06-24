const friends = ['Jerry', 'Tom', 'Dog', 'Lion'];
//includes eita case sensetive jei bhabe element lekha ase oi bhabe chara se out put dibe na..
console.log(friends.includes('Tom'));
console.log(friends.includes('Tiger'));

if(friends.includes('Tom')){
    console.log('I will buy fish for him')
}
else{
    console.log('Return to home')
}