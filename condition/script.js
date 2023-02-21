// normal comparison, // multiple comparison,  // multiple condition


// normal comparison
var num1 = 25;
var num2 = 35;
var num3 = 39;
var num4 = 97;

document.write("<h1>Comparison<h1/>");
document.write(num1 > num2);
document.write("<br/>")
document.write(num1 < num2);
document.write("<br/>");
document.write(num1 <= num2);
document.write("<br/>");
document.write(num1 >= num3);
document.write("<br/>");
// equal value
document.write(num1 == num3);
document.write("<br/>");
// equal value and type
document.write(num1 === num3);
document.write("<br/>");
// notequal value
document.write(num1 != num3);
document.write("<br/>");
// notequal value and type
document.write(num1 !== num3);
document.write("<br/>");

// multiple comparison

// if all condition true result true
document.write(num1 > num2 && num3 < num2 && num4 > num2);
document.write("<br/>");

//if one condition true result true
document.write(num1 > num2 || num3 < num2 || num4 > num2);
document.write("<br/>");

var age = prompt("Enter your age");
var youngAge = 18;


//condition 
if(age < 100 && age > 0 && age > youngAge){
    document.write('Congratulation you are a young man'); 
}else if(youngAge > age && age > 0){
    document.write("Now you'r under young age");
}
else{
    document.write("Plz enter valid date");
}
document.write("<br/>");
document.write("<br/>");

var hsc = 4.95;
var ssc = 4.00;
var money = 10000;
if(hsc > 4.5 || ssc > 4.5 || money > 50000){
    document.write('You can fill up this form ');
}else{
    document.write('You cannot fill up this form');
}
document.write("<br/>");
document.write("<br/>");
// multiple condition

if((hsc > 4.5 && ssc > 4.5) || money > 50000){
    document.write('You can fill up this form ');
}else{
    document.write('You cannot fill up this form');
}