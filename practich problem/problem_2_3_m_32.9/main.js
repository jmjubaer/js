const people = [{name:"Meena",age:20},{name: 'Rina',age:15},{name:'Suchorita',age:22}];
// const ageSum = people.reduce((previous,current) =>{
//    return (previous + current.age)
//     // age: previous.age + current.age
// },0);


const ageSum = people.reduce((previous,current) =>({
    age: previous.age + current.age
}))

console.log(ageSum);

let data = {
    location: [
        {
            la: 145,
            lafkj:542,
            country: "bangladesh"
        }
    ]
}
console.log(data.location[0].country);