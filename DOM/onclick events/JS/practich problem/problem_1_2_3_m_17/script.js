// problem 1  // problem 2


// problem 1
var money = 1000;
var mangoPrice = prompt("Say mango price");
var orangePrice = prompt("Say orange price");
var totalPrice = parseInt(mangoPrice) + parseInt(orangePrice);
var backMoney = money - totalPrice;

document.write("<h1>Back money</h1>");
document.write(backMoney);

// problem two
var math = 75.25;
var english =  65;
var ict = 80;
var civis = 35.45;
var geography = 99.50;

var sumMarks = (math + english + ict + civis + geography) / 5;

document.write("<h1>Problem Two Output</h1>");
document.write(sumMarks.toFixed(2));



// problem three
var fInput = "I am going to be";
var lInput = "an awesome web developer"

var pTwoOutput =fInput + " " + lInput;

document.write("<h1>Problem Three Output</h1>");
document.write(pTwoOutput);

// problem 4

var inputNumber = 119;
var modulusNumber = 5;
var modulus = inputNumber % modulusNumber;

document.write("<h1>Problem Four Output</h1>");
document.write(modulus);


