let jubaer = {
    name : "jubaer",
    address : "morrelgonj",
    study : true,
    age:18
};
let jsonJubaer = JSON.stringify(jubaer);
console.log(jsonJubaer);

let arrayJubaer = JSON.parse(jsonJubaer);
console.log(arrayJubaer);