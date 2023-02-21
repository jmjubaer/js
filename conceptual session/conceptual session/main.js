document.write("<h1>Conceptual Session<h1/>");
var num_1 = 10;
var num_2 = "20";

console.log(num_2 - num_1);

if (num_1 % 2 == 0) {
    document.write("This is odd Number");
} else {
    document.write("This is Even Number");
};

document.write('<br/>')
var friends = ['mim', 'jihad', 'noyon', 'mehedi'];
for (var i = 0; i < friends.length; i++) {
    document.write(friends[i], ", ");
    // document.write("Sorry" , i, "<br/>");
};


// object..........

var jm = {
    name: "jubaer", 
    age: 18,
    friend: ['mim', 'jihad', 'noyon', 'mehedi'],
    country: "BD",
    father: {
        name: "sarif"
     },
};
document.write('<br/>');

for(var i = 0; i < jm.friend.length; i++){
    document.write(jm.friend[i], ", ");
};
document.write('<br/>');
document.write(jm.father.name);
document.write('<br/>');


function sum(num1,num2) {
    return num1 + num2;
  }

function minus(num1,num2) { 
    var result = num1 - num2;
    return result;
 }


var totalsum = sum(10,20);
var totalminus = minus(20, 25);
document.write(totalsum  + totalminus);
document.write('<br/>');


function Sorry(){
    for(i = 0; i <= 10; i++){
        document.write("sorry" + " ");
    }
};

Sorry();
