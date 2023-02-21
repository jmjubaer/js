// converter...  // even or odd number , // leap year check...

//converter...,

// inch to feet
function feet(inch){
    feets = inch / 12;
    return feets;
}

let inFeet = feet(84);
document.write(inFeet + "Feet");

// miles to KM

function KM(miles){
    let km = miles*1.60934;
    return km;
}
document.write("<br/>")
let kilomiters = KM(2);
document.write(kilomiters, " KM");

//hour to minutes 

document.write("<br/>")
function minutes(hour){
    let toMinute = hour*60;
    return toMinute ;
};

let getMinutes = minutes(5);
document.write(getMinutes, " Minutes");

// centimeter to meter

function centimeterToMeter(centimeter){
    let meter = centimeter*0.01 + "meter";
    return meter;

}

let getMeter = centimeterToMeter(500);

document.write("<br/>")
document.write(getMeter);

//radian to degree .....
//1rad × 180/π
function degree(radian){
    let degree = radian*(180 / Math.PI);
    return degree;
}

document.write("<h1>Radian to Degree</h1>")
document.write(degree(199).toFixed(2)," Degree");

// leap year check...

document.write("<br/>")
document.write("<br/>")
function checkLeapYear(year){
    if((year % 4 === 0) && ((year % 100 != 0) || (year % 400 == 0 ) )){
        let leapYear = " leap year";
        return leapYear;
    }
    let notLeapYear = "not leap year";
    return notLeapYear;
}
// let dobYear = prompt("Enter your born Year.");
let dobYear = prompt();
let leapYear = checkLeapYear(dobYear);

document.write(dobYear + " is " + leapYear );



// even or odd number 
document.write("<br/>")

function checkNumbers(number){
    if(number % 2 == 0){
        return true;
    }else{
        return false;
    }
};

let firstNumber = checkNumbers(50);
let secondNumber = checkNumbers(117);
document.write(secondNumber);

