// power .....
document.write(Math.pow(10, 2));    

// absulate .....
let num1 = 20;
let num2 = 30;

let minus = num1 - num2;
let absulatResult = Math.abs(minus)
document.write("<br/>")
document.write(minus);
document.write("<br/>")
document.write(absulatResult);

//round...

document.write("<br/>")
document.write("<br/>")
let num3 = 123.7565;
document.write("Number = 123.7565")

document.write("<br/>")
document.write(Math.round(num3));

// cell and floor....

document.write("<br/>")
document.write(Math.ceil(num3))
document.write("<br/>")
document.write(Math.floor(num3))

// random....

document.write("<br/>")
document.write("<br/>")
document.write(Math.round(Math.random()*50));

// py er man
document.write("<br/>")
document.write(Math.PI);

// min and max...

let number = [10, 25, 75, 35, 14, 65];
document.write("<br/>")
document.write(Math.min(10, 25, 75, 35, 14, 65));
document.write(Math.max(10, 25, 75, 35, 14, 65));

// destructing value....

let number1 = 50;
let number2 = 30;

// first approach...
let temp = number1
document.write("<br/>")
document.write("<br/>")
document.write(number1,' ',number2);

number1 = number2;
number2 = temp;

document.write("<br/>")
document.write(number1,' ',number2);

[number1,number2] = [number2,number1]

document.write("<br/>")
document.write(number1,' ',number2);