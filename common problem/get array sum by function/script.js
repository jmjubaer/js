//Get sum to array function....
function arraySum(Numbers){
    let sum = 0;
    for(i = 0; i < Numbers.length; i++){
        let element = Numbers[i];
        sum += element;
    }
    return sum;
}


// get odd number form array.....
function oddNumberSum(Number){
    let oddNumber = [];
    for(let i = 0; i < Number.length; i++){
        let elements = Number[i];
        if(elements % 2 !== 0){
            oddNumber.push(elements);
        }
    }

    let sum = 0;
    for(i = 0; i < oddNumber.length; i++){
        let element = oddNumber[i];
        sum += element;
    }
    return sum;
}

document.write("<h1>Array:[5, 7, 8, 10, 45, 30]</h1>");
let myNumbers = [5, 7, 8, 10, 45, 30];
let getArraySum = arraySum(myNumbers);
document.write("<h1>Get Array Sum</h1>");
document.write(getArraySum);

document.write("<h1>Get Odd Number Sum</h1>");
let getOddSum = oddNumberSum(myNumbers);
document.write(getOddSum);


console.log(findOddNumber(myNumbers));














