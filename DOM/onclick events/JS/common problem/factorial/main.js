
// multiplication....
function getMull(number){
    mul = 1;
    for(i = 0; i < number.length; i++){
        let element = number[i];
        mul *= element;
    }
    return mul;
}

let myNumber = [10, 52, 56, 32, 45, 32, 41]
console.log(getMull(myNumber));


// factorial ..............


function factorial(number){
    fact = 1;
    for (i = 1; i <= number; i++){
        fact *= i;
    }
    return fact;
}

// reverse

// function factorial(number){
//     fact = 1;
//     for (i = number; i >= 1; i--){
//         fact *= i;
//     }
//     return fact;
// }

// use while loop 

// function factorial(number){
//     fact = 1 ;
//     num = 1;
//     while(num <= number){
//         fact *= num;
//         num ++;
//     }
//     return fact;
// }

let factorialNumber = 5; 

let getFactorial = factorial(factorialNumber);

console.log("Factorial numbr of", factorialNumber , "is" , getFactorial);

