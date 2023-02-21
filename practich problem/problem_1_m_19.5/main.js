// problem 1..
// var money = prompt("How many money you have?");

// if(money >= 80000){
//     document.write("<h1>I will buy a Mac Book air");
// }else if(money >= 60000){
//     document.write("<h1>I will buy a Gaming Laptop");
// }else if(money >= 40000){
//     document.write("<h1>I will buy a lenovo Yoga");
// }else if(money >= 20000){
//     document.write("<h1>I will buy a used laptop");
// }else{
//     document.write("<h1>I will continue with my Phone");
// }


// problem 2 ..

var love = "I love him very much";
var number = 0;
while(number < 5){
    document.write(love + "<br/>");
    number++;
}

// problem 3 & 4 ....
for(i = 412; i <= 456; i += 2){
    document.write(i + "<br/>");
    if(i == 450){
        break;
    }
}
//  porblem 5 ....

var mobiles = ["vivo", "lenovo", "iPhon", "honor", "huawei"];
var number = 0;
while(number < mobiles.length){
    var mobile = mobiles[number];
    if(mobile == "huawei"){
        break;
    }
    document.write(mobile + "<br/>");
    number++;
}
