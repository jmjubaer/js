// remove element in array at first, // check Array......,
// Array, // single array output or diclare value width index, // change array item value with index, // find array index, // push array item,  // pop array item,  // add element in array in first, // array slice.., //array includes.., array reverse ..,  // array concat, // array splice..

// Array
var ageList = [25, 18, 78, 69, 65, 52];
var fruitName = ['mango', 'banana', 'orange'] ;
var vowel = ["A", "E", "I", "O", "U"];

document.write('<h1>Vowel <h1/>');
document.write(vowel);
document.write('<br/>');
document.write('<h1>Number of vowel <h1/>');
document.write(vowel.length);
document.write('<br/>');
document.write('<br/>'); 

document.write('<h1>Number Array<h1/>');
document.write(ageList);

document.write('<br/>');
document.write('<br/>'); 
document.write('<h1>var ageList = [25, 18, 78, 69, 65, 52];  <h1/>');
document.write('<br/>'); 
var ageList = [25, 18, 78, 69, 65, 52];

// check Array......

document.write('<br/>'); 
document.write(Array.isArray(ageList));
// single array output or diclare value width index

// var singleAge = ageList[2];
document.write('<br/>'); 
document.write(ageList[2]);
document.write('<br/>'); 

// change array item value with index

ageList[2] = 80;
ageList[0] = 50;
document.write(ageList);
document.write('<br/>'); 

// find array index

document.write(ageList.indexOf(52));
document.write('<br/>')
document.write(ageList.indexOf(555));
document.write('<br/>'); 

//we can push or unshift array element both number or 'string' ,

// push array item
var friendsName = ['Rahat ', 'Noyon', 'Mehedi', 'nizamul'] ;

friendsName.push('nadim', 'fardin' , 'rafi')
document.write(friendsName);
document.write('<br/>');

// pop array item

friendsName.pop();

document.write(friendsName);
document.write('<br/>');

// popout item store in another variable

var specialFriend = friendsName.pop();

document.write(specialFriend);
document.write('<br/>');


 // add element in array in first
friendsName.unshift('jm', 'juel');

document.write(friendsName);
document.write('<br/>');

// remove element in array at first

friendsName.shift();
document.write(friendsName);
document.write('<br/>');

// array slice..

var friendName = [' Rahat ', ' Noyon', ' Mehedi', ' nizamul', ' Nadim', ' rabbi', ' saiful'] ;


document.write('<h1>Array slice.......<h1/>');
document.write(friendName.slice(1,7));
document.write('<br/>');
document.write(friendName.reverse());
document.write('<br/>');

// array includes ...
document.write(friendName.includes("Noyon"));
document.write('<br/>');

// array concat
var array1 = [' jm', ' jubaer', ' jp', ' hj', ' fg'];
var array2 = [3, 4, 6];

let newArray = array1.concat(array2);

document.write(newArray);
document.write('<br/>');

//slice ....
document.write(array1.slice(1,5))
document.write('<br/>');

// array splice..
//it is remove the difined item from array also can add item in this place
document.write('<br/>');
document.write('<br/>');
document.write(array1)
document.write('<br/>');
document.write(array1.splice(1,3, " Noyon"," Rahat"," Nizamul"));//(first,second write remove item index and third,forth.... add in this place item)
document.write('<br/>');
document.write(array1)
document.write('<br/>');




