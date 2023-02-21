 
 
 let numbers = [15,25,15,34,875,45,57];
 for(i = 0 ; i < numbers.length; i++){
     console.log(numbers[i]);
    }

console.log(numbers);
    
console.log(...numbers); // essay way
 let maxNumber = Math.max(...numbers);
 console.log(maxNumber);

 // make a array get form data another array 


 let numbers2 = [...numbers];
 // you can add more item with previous array 
 let numbers3 = [...numbers,254,875,45];