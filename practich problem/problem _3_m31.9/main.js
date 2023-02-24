let mathematics = (arr) => {
    let sum = 0;
    for(let item of arr){
        const power = Math.pow(item,2);
        sum +=power;
    }
    let average = sum / arr.length;
    return Math.round(average)
}

let numbers = [5, 8, 7, 4, 10, 6 ];

console.log(mathematics(numbers));
