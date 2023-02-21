// // sum ............, // divition........,  // multipulation or squar and dbl function use.............


document.write('<h1>function.......</h1>')

function fn(first){
    document.write('function ', first)
};


fn("Trial");
document.write("<br/>")

// function expression

let jm = function(num1, num2){
    return num1 + num2;
}

console.log(jm(10, 25));

// // sum and default  parameter ............

function fn2(a, b, c, d = 0, e = 0){
    document.write(a + b + c + d + e);
};
fn2(35, 35, 95);

document.write("<br/>")

// divition........
function fn3(money){
    var bookPrice = 30;
    var quantity = money / bookPrice;
    return quantity;
}

var myMoney = 600;
var fn3_value = fn3(myMoney).toFixed(2);
document.write(fn3_value , ' Taka');
document.write("<br/>");

// multipulation or squar and dbl function use.............

function fn4(number){
    var mull = number * number;
    // return number * number;
    return mull;
};

var num1 = fn4(5);
var num2 = fn4(7);

document.write(num1 + " + " + num2);
document.write("<br/>");
document.write(num1 + num2);


// get argument ...

function argument(nua,nuan){
    console.log(num1 + num2);
    console.log(arguments);
    console.log(arguments[3]);
}
let nk = argument(10,20);
console.log(nk);



//  module 31.5
// function declaration 

function sum(first ,second){
    return first + second;
}

console.log(sum(10, 10));
// function expression 

let expression = function  expression(){
    console.log("function expression");
}
expression();

// anonymous function expression 

let anonymous = function (){
    console.log("anonymous function");
}

anonymous();

// array function
let arrayFunction = (first , second) => {
    console.log("Array function");
    return first + second;

}
console.log(arrayFunction(10,50));

// no parameter
let arrayFN2 = () => {
    console.log("object");
}

// single parameter 

const num = 5;
// let arrayFN3 = (num) => {
let arrayFN3 = num => { // as your wise
    console.log(num * 2);
};
