// Sum nth 

// system 1..?...
function sumN(nth){
    let sum = 0;
    for(i = 1; i<= nth; i++){
        sum += i;
    }
    return sum;
}
// console.log(sumN(2));

//system 2.......
function sumN2(nth){
    let sum2 = (nth*(nth + 1)) / 2;

    return sum2;
}
// console.log(sumN2(50));

// trabel ........

function trabel(number){
    for(i = 1; i <= 10; i++){
        console.log(i + " * " + number + " = " + i*number);
        document.write(i + " * " + number + " = " + i*number + "<br/>");
    }
}
 
// trabel(8);

let array = [1 ,52,85, 62, 75, 45];
console.log(Math.max(1 ,52,85, 62, 75, 45));

// factorial.........
