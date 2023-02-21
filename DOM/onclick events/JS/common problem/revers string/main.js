let jm = "My name is jubaer. I love him very much";
function reversString1(string) { 
    let revers = "";
    for(i = jm.length -1; i >= 0; i--){
    let element = jm[i];
    revers += element;
    }
    return revers;
 }

console.log("Letter Revers");
console.log(reversString1(jm));
console.log(jm.split("").reverse().join(""));
console.log("Word Reverse");
console.log(jm.split(" ").reverse().join(" "));//word revers

function wordReverse(words){
    let reversWord = words.split(" ");
    let emptyArray = [];
    for(i = reversWord.length - 1; i >= 0;i--){
        let element = reversWord[i];
        emptyArray.push(element);
    }
    let joined = emptyArray.join(" ")
    return joined;
}

console.log(wordReverse(jm));