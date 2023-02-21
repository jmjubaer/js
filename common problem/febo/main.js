function getFebo(number){
    let fibo = [0, 1];
    for(i = 2; i < number; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

console.log(getFebo(2));