// while loop, // even Number while loop, // even Number for loop, // do while Loop and break...  // For loop use,   // loop break---, // loop continue.., // make a array from loop output...


// while loop   
var love = "I love him";
var loops = 1;
console.log("For loop");
while(loops <= 10){
    console.log(love);
    console.log(loops);
    loops++;
}

var wla = ['jm', 'jp', 'jmi', 'js'];
var wlan =0;
while(wlan < wla.length){
    document.write(wla[wlan] + "<br/>");
    wlan++;
}
document.write("<br/>")
document.write("<br/>")

var wlan = wla.length - 1;
while(wlan >= 0){
    document.write(wla[wlan] + "<br/>");
    wlan--;
}

// even Number while loop
console.log("even Number while loop");
var number = 2;
while(number <= 20){
    console.log(number);
    // number++;
    number += 2;
};
 
// even Number for loop
// console.log("even Number for loop");
// for(var number = 2; number <= 20; /* number++; */ number += 2){
//     console.log(number);
// };

// standard for-loop
console.log("even Number for loop");
for(var i = 2; i <= 20; /* i++; */ i += 2){
    console.log(i);
};  

console.log("even Number for loop");
for(var i = 20; i >= 2; /* i++; */ i -= 2){
    console.log(i);
};  

var friends = ["jm", "noyon", "rahat", "mehedy", "fardin", "Azad"];

for(var i = 0; i < friends.length; i++){
    console.log(friends[i]);
    document.write("I LOVE HIM <br/>")
}

// do while Loop and break...
document.write('<h1>Do While Loop<h1/>');
var dwl = ['mango', 'banana', 'stabary', 'orange']
var i = 0;
do{
    document.write(dwl[i] +" <br/>");
    i++;
    if(i == 4){
        break;
    }
}while(i < dwl.length);

// loop break---

//while loop break
var num = 0;
while(num < 50){
    document.write(num + "<br/>");
    num++;
    if(num > 10 ){
        break
    }
};

//for loop break
var rlb = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i'];

for(var i = 0; i < rlb.length; i++){
    var rlbi = rlb[i];
    if(rlbi == 'g'){
        break;
    };
    document.write(rlbi + "<br/>");
};

document.write("<br/>")
document.write("<br/>")
var numm = [10, 52, 26, 87, 85., 125, 75, 12];
for(var i = 0; i < numm.length; i++){
    var numb = numm[i];
    if(numb > 100){
        document.write("its over")  
        break;
    }
    document.write(numb + "<br/>");
}

// loop continue..
// continue means skip this condition value
document.write("<br/>")
document.write("<br/>")

var flc = [52, 42, 45, 85, 96, 82 ,325, 165, 36, 45]
for(var i = 0; i < flc.length; i++){
    var flci = flc[i];
    if(flci > 50){
        continue;  
    }
    document.write(flci + "<br/>");
}
document.write("<br/>")
document.write("<br/>")
// make a array from loop output...

var temp = [];
for(i = 1; i <= 20; i++){
    document.write(i, ", ");
    if(i % 2 == 0){
        temp.push(i + " ");
    };
};
document.write("<br/>")
document.write("<br/>")
document.write("Make a array from loop output");
document.write("<br/>")
document.write(temp);
