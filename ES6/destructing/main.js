let jm = {
    name : "jubaer",
    address: "morrelgonj",
    age : 18
};


// let {name,address,class} = {name : "jubaer", address: "morrelgonj",class: 13,age : 18 }; // you can also do it 


// you can also change object variable name
let {name,age:years,address} = jm;
console.log(name,address,years);


const friends = ["rahat","jubaer","noyon"];

// destructing .... 
// [firstF,secondF,thirdF] = ["rahat","jubaer","noyon"]; // as your wise


[firstF,secondF,thirdF] = friends;

console.log(firstF,secondF,thirdF);
