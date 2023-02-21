// Get Largest Name Form Array

let bestFriend = ["md jubaer", "Mehedi Akon", "MD Rahat Howlader","Noyon Howlader",  "Pinik", "Rabbi", "Saiful"]

function largestName(name){
    let largeName = name[0];
    for(i = 0; i < name.length; i++){
        let element = name[i];
        if(element.length > largeName.length){
            largeName = element;
        }
    }
    return largeName;
}

let getLargeName = largestName(bestFriend);

console.log(getLargeName);


