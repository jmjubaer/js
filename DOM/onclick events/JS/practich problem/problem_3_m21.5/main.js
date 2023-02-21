// Problem 3
function grading(marks){
    if(marks >= 80){
        var grade = "A+"
    } else if (marks >= 70){
        var grade = "A"
    } else if (marks >= 60){
        var grade = "B"
    } else if (marks >= 50){
        var grade = "C"
    } else if (marks >= 40){
        var grade = "D"
    }else{
        var grade = "F"
    }
    return grade;
}

let result = grading(30);

console.log(result);


function persent(number, per){
    let benefit = (number / 100)*per;
    let total = benefit + number;
    return total;
}


let taka = 5000;
let perBnf = 15;
let totalAmount = persent(taka,perBnf)
console.log(totalAmount);