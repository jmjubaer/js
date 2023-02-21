// problem 1, // problem 2, // problem 3, // problem 4, // problem 5, 


// Problem 1
var fruits = ['Apple', 'Banana', 'Orange'];

document.write('<h1>Find Array index');
document.write('<br/>');
document.write(fruits.indexOf('Banana'));

document.write('<br/>'); 
document.write('<br/>'); 
fruits[1] = 'Mango';
document.write(fruits);

fruits.pop();
document.write('<br/>'); 
document.write(fruits);

fruits.push('Watermelon');
document.write('<br/>'); 
document.write(fruits);

document.write('<br/>'); 
document.write('<br/>'); 

// Problem 2

var my = 85;
var tom = 66;
var jane = 95;
var peter = 56;
var jhon = 40;
var result = jhon;

if(result >= 80){
    document.write('A Grade');
}else if(result >= 60){
    document.write('B Grade');
}else if(result >= 50){
    document.write('C Grade');
}else if(result >= 40){
    document.write('D Grade');
}else{
    Document.write('F Grade');
};
document.write('<br/>'); 
document.write('<br/>'); 

// Porblem 3

var num1 = 13;
var num2 = 79;
var num3 = 45;

if(num1 > num2 && num1 > num3){
    document.write('max-number 13');
}else if (num2 > num1 && num2 > num3){
    document.write('max-number 79');
}else if (num3 > num1 && num3 > num2){
    document.write('max-number 45');
}else{
    document.write('Every Element same');
}

document.write('<br/>'); 
document.write('<br/>'); 
var maxNumber = Math.max(13, 79, 45);
document.write(maxNumber);

document.write('<br/>'); 
document.write('<br/>');
// problem 4

var side1 = 9;
var side2 = 8;
var side3 = 9;

if(side1 == side2 || side1 == side3 || side2 == side3){
    document.write('This two side equal triangle');
}else {
    document.write('This unequal triangle');    
}

document.write('<br/>'); 
document.write('<br/>');
 

