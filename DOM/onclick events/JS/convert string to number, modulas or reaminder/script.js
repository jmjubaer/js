// convert string to number, // convert string to decimal Number, // tofixed and change data type, // modulas or remainder

var age = 18;

var dof = "2004";

var now = "2023";

var time = "9.51";

// convert string to number
var pAge = parseInt(now) - parseInt(dof);
document.write("pAge = parseInt(now) - parseInt(dof);");
document.write("<br/>");
document.write(pAge);
document.write("<br/>");
document.write("<br/>");


// convert string to decimal Number

time = parseFloat(time);
document.write("parseFloat(time)");
document.write("<br/>");
document.write(time);


var age = 18;
var yAge = 18;
var dof = "2004";
var bol = (age >= yAge);
var mAge;

document.write("<br/>");
document.write("<br/>");
document.write(typeof(age));
document.write("<br/>");
document.write(typeof dof);
document.write("<br/>");
document.write("<br/>");
document.write(bol);
document.write("<br/>");
document.write("<br/>");
document.write(typeof bol);
document.write("<br/>");
document.write("<br/>");
document.write(typeof mAge);

// tofixed and change data type
var nam1= 0.1;
var nam2 = 0.2;
var sum = nam1 + nam2;
document.write("<br/>");
document.write("<br/>");
document.write(sum.toFixed(2));
document.write("<br/>");
document.write("<br/>");
document.write(typeof sum);

sum = sum.toFixed(2);
document.write("<br/>");
document.write("<br/>");
document.write(typeof sum);

sum = parseInt(sum);
document.write("<br/>");
document.write("<br/>");
document.write(typeof sum);


// modulas or remainder

var apple = 11;
var person = 3;
var reminder = apple % person;

document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("reminder  or modulas (%)");

document.write("<br/>");
document.write("<br/>");
document.write(reminder);
 