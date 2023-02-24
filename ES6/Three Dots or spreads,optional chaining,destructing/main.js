

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
let numbers3 = [751,...numbers,254,875,45];

// it storage first and second element storage in variable and other element storage in another variables

let [first,second,...remaining] = numbers;
 console.log(first,second,remaining);

 // it storage first and second element storage in variable and other element storage in another variables
 let jm = {
     name: "jubaer",
    age : 18,
    male: true,
    relation : "single" ,
    address : "bd"
 };
 

 
 let {name,age,...lastAll} = jm;
 


 
 // connect two array by using spread operator
 
 const studentsName = ["jubaer","mehedy","nizamul"];
 const roll = [703927,703928,703929];

 const studentDetails = [...studentsName,...roll];
 console.log(studentDetails);



 // connect two array by using spread operator
 
 const friendName1 = {
                        firstF:"rahat",
                        secondF:"mehedy",
                        thirdF:"nizamul"
                    };
 const friendName2 = {
                        forthF : "rabbi",
                        fifthF : "noyon"
                    };
 
 const friend = {...friendName1,...friendName2};
 console.log(friend);



 // optional chaining 
 
 console.log(jm?.father?.name);