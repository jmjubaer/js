var love = "I love my mother";

// includes........

let searchString = "Love";
let doseExist = love.includes(searchString);

let findString = love.toLowerCase().includes(searchString.toLowerCase()); // ignore case 

document.write(doseExist);
document.write("<br/>")
document.write(findString);


// substring.........
document.write("<br/>")
document.write("<br/>")
document.write(love.substring(2,7));


// length...........
document.write("<br/>")
document.write(love.length);


// case changing........
document.write("<br/>")
document.write("<br/>")
document.write(love.toUpperCase());


// search by index......
document.write("<br/>")
document.write("<br/>")
document.write(love[5]);

// search index............
document.write("<br/>")
document.write(love.indexOf(searchString));
document.write("<br/>")
let searchIndex = love.indexOf(searchString.toLowerCase()); // ignore case

if (searchIndex !== -1){
    document.write("Find this");
}else{
    document.write("Cannot find");
};

// startWith & endWith.....
let jm = "jmjubaer.pdf";

document.write("<br/>")
let searchStartWith = jm.startsWith("jm");
let searchEndWith = jm.endsWith(".pdf");

document.write(searchStartWith);
document.write("<br/>")
document.write(searchEndWith);



let lyrics =  'tume bondu kala pakhi. Ami jeno ki. Bosonto kale tomay bolte parini.';

document.write("<br/>")
let worldSplit = lyrics.split(" "); //word split
document.write(worldSplit);

let sentenceSplit = lyrics.split(","); //sentence split
let sentenceSplit2 = lyrics.split("."); //sentence split
document.write("<br/>")
document.write(sentenceSplit);
document.write("<br/>")
document.write(sentenceSplit2);

let letterSplit = lyrics.split(""); //letter split
document.write("<br/>")
document.write(letterSplit);

// splice......

let slices = lyrics.slice(10, 20);
document.write("<br/>")
document.write("<br/>")
document.write(slices)

// substring.....

let getSubstring = lyrics.substring( 10,20);

document.write("<br/>")
document.write(getSubstring);

//trim.. 
let trim = lyrics.trim();

document.write("<br/>")
document.write(trim); // remove first and last white space

// concat, commonly ude in array..


let string1 = ['tume bondu kala pakhi', 'Ami jeno ki', 'Bosonto kale tomay bolte parini.'];
let string2 = " 'I love you','jaan','pakhi' ";

let concat = lyrics.concat(string2);
document.write(concat);
document.write("<br/>")

// join only use in string array...
let joined = string1.join(" ; ");
document.write("<br/>")
document.write(joined);