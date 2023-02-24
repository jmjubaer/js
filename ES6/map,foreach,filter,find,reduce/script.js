// map ... , foreach... , filter... , find..... , reduce .... 


// caution : map,filter,find,foreach only use in array.

// Map();
let numbers = [12,52,47,85,35,14,65];

let multi = numbers.map(num => num * 2);
console.log(multi);

const modules = numbers.map(num => num % 3) ;
console.log(modules);

const name = ["jubaer","rahat","mehedy"];

let addMD = name.map(nam => 'Md ' + nam );
console.log(addMD);  

const myCollection = [{name: "laptop",price : 31000},{name : "mobile",price: 15000},{name: "router",price: 3200}];
const ProductsName = myCollection.map(p => p.name);
const ProductsPrice = myCollection.map(p => p.price);
console.log(ProductsName);
console.log(ProductsPrice);

// map work like loop . it return all element of array than you can do something in array element .


// forEach();
// caution : foreach never return anything but you can do console.log, alert, ....

//const name = ["jubaer","rahat","mehedy"];
name.forEach(elements => {
    fullName = "md " + elements;
    console.log(fullName);
});



//filter ..............
// caution: filter is conditional function


let friends = ["jubaer","noyon","rahat","mehedy"];

const fiveLength = friends.filter(num => num.length === 5);

console.log(fiveLength); // it give all condition mach item



// find .............
//caution : it give only first mach item 
const sixLength = friends.find(num => num.length === 6);

console.log(sixLength);



//reduce .....

// let numbers = [12,52,47,85,35,14,65];

// let sum  = numbers.reduce((parameter, parameter) => (parameter + parameter),initial value);
let sum  = numbers.reduce((previous, current) => (previous + current),0);

console.log(sum);
console.log(evenSum);

