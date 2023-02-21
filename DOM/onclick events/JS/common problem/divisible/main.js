function divisible(){
        let emptyArray = [];
    for(i = 1; i <= 50; i++){
        if((i % 3 == 0) && (i % 5 == 0)){
            emptyArray.push(" FooBar");
            console.log("FooBar");
        }else if(i % 5 == 0){
            emptyArray.push(" Bar");
            console.log("Bar");
        }else if(i % 3 == 0){
            emptyArray.push(" Foo");
            console.log("Foo");
        }else{
            emptyArray.push(" " + i);
            console.log(i);
        };
    }
    return emptyArray;
}
let divisibleArray = divisible();
// console.log(divisibleArray);
// document.write(divisibleArray);