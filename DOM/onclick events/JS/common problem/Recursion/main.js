function recursion(i){
    if(i == 1){
        return 1;
    };
    let sum = i + recursion(i - 1);
    return sum;
}
console.log(recursion(5));


//Factorial ..................
let factorialSum = 1;

function factorial(number){
    for(let i = 1; i <= number; i++){
        factorialSum = factorialSum * i;
    }
    return factorialSum;
}


console.log(factorial(5));

// factorial rules n! = n * (n -1)!;

// factorial by recursion

function factorial2(i){
    if(i ==  1){
        return 1
    }
    return i * factorial2(i - 1);
}
console.log(factorial2(5));