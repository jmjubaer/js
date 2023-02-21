let numberArray = [10,28, 45, 82, 45, 12, -45, -25, 78, 96];
function getPositiveNumber(number){
    let emptyArray = [];
    for(i = 0; i < numberArray.length; i++){
        let element = numberArray[i];
        if(element < 0){
            break;
        }
        if(element > 0){
        emptyArray.push(element);
    }
    }
    return emptyArray;
}
let positive = getPositiveNumber(numberArray);
console.log(positive);