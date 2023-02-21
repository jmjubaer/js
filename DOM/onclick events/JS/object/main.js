
// object declare........
const mobile = {
    name: "vivo",
    model: "y20",
    price: 14000,
    camera: "13mp",
    color: "blue"
}
document.write(mobile.camera);
console.log(mobile);
document.write('<br/>');

// get all object keys or value in a array 

var properties = Object.keys(mobile);
document.write("Properties: " + properties);
document.write('<br/>');

var propertyValue = Object.values(mobile); 
    document.write("values: " + propertyValue);
var  num = 0;
document.write('<br/>');

// output in array 
console.log('For Loop........');
for(var i = 0; i < properties.length; i++){
    var propertie = properties[i];
    var propertyValues = propertyValue[i];
    console.log(propertie, propertyValues);
}

// for in loop.........
console.log("For in loop ....");
for(var property in mobile){
    let value = mobile[propertie];
    console.log(property, value);
}


// console.log('While Loop........');
// while(num < propertyValue.length){
//     console.log(propertyValue[num]);
//     num++;
// }
document.write('<br/>');
//get object value or change....
//there has three system
var cameraMp1 = mobile.camera;
var cameraMp2 = mobile["camera"];

var nameKeys = 'camera';
var cameraMp3 = mobile[nameKeys]
document.write(cameraMp3);


// change object value........
document.write('<br/>');

mobile.camera = "8MP";

mobile['camera'] = "120MP"
document.write('<br/>');

mobile[nameKeys] = "48MP";
document.write(mobile.camera);

document.write('<br/>');

//Change object in array

var laptop = {
    name: "hp",
    model: "840G3",
    processor: "i5"
}
document.write(Object.entries(laptop));



let jm = 
{
    name:"jubaer",
    collage: "Martivasha digree collage",
    friend: ['Noyon','Mehedi','Rahat'],
    skill: function(){
        for(let i = 0; i <= 10; i++){
            console.log(i);
        }
    },
    mobile: {
        Brand: {
            name: "vivo",
            country: "indian"
        },
        Model: "Y20",
        Price: 15000
    }
}

console.log(jm.skill());