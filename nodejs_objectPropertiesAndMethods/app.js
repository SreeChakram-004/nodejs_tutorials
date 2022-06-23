//object properties and methods
const x = {
    "name": "hari"
}
const y = x['name'];
console.log(y);
console.log(typeof(y));

//function and arrays
const arr = [];
arr.push(function (){
    console.log('hey hello buddy')
});

arr.push(function (){
    console.log('hey hello buddy here')
});

arr.push(function (){
    console.log('hey hello buddy here okey')
});
arr.forEach(function (item){
    item();//hey hello buddy hey hello buddy here    hey hello buddy here okey 
});
