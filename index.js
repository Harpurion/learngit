//Version 1
let array = ['apple', 'pear', 'cherry', 'mango'];

for(fruit of array) {
    console.log(fruit);
}

//Version 2
array.forEach(fruit => {
    console.log(fruit);
});

//Different stuff
let obj = {
    name: 'Artur',
    age: 17,
    color: 'white'
};

for(key in obj) {
    console.log(obj[key]);
    console.log(obj[key]);
}


let capital = array.map(fruit => {
    return fruit.toUpperCase();
});

console.log(capital);


let aFruits = array.filter(fruit => {
    return fruit.includes('a');
});

console.log(aFruits);


let num = [1, 2, 3, 4, 5, 6, 7];

let sum = num.reduce((total, num) => {
    return total + num;
});
console.log(sum);

