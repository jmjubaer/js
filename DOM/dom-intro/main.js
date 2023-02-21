//it called all li
let liCollection = document.getElementsByTagName('li');
for (const li of liCollection){
    console.log(li);
    console.log(li.innerText);
}
let headingItem = document.getElementById('heading_item');
console.log(headingItem);
console.log(headingItem.innerText);
headingItem.innerHTML = "Heading Change by JS"


let pItems = document.getElementsByClassName('p_items');
for(let pItem of pItems){
    console.log(pItem.innerText);
}

//get first item as same class name items use querySelector("class name")
console.log(document.querySelector('.className li').innerText);

//get all item
let liItems = document.querySelectorAll('.p_items');

for(let li of liItems){
    console.log(li);
}
