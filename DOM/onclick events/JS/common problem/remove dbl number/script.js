function removeDblItem(items){
    let uniqueItem = [];
    for(i = 0; i < items.length; i++){
        let item = items[i];
        // system 1..................
        
        if(uniqueItem.includes(item) !== true){
            uniqueItem.push(item);
        }

        //system 2.............
        // if(uniqueItem.indexOf(item) == -1){
        //     uniqueItem.push(item);
        // }
    }
    return uniqueItem;
}

let myArray = ['jubaer', 'Mehedi', 'Noyon', 'jubaer', 'pinik', 'pinik', ' noyon'];
let getUniqueItem = removeDblItem(myArray);
console.log(getUniqueItem);
