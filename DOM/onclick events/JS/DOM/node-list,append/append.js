
console.log(document.querySelector('#sectionOne ul'));
let addItem = document.createElement('li');
addItem.innerText = "Another list item add by js";
document.querySelector('#sectionOne ul').appendChild(addItem);
console.log(addItem.parentNode.parentNode);


// Add section approach 

// three step ....
//first step were to add

let addSection = document.getElementById('main_container');

// second step what to be added

let section = document.createElement('section');
let h1 = document.createElement('h1');
h1.innerText= 'Fruit list that add js';
section.appendChild(h1);
let ul = document.createElement('ul');
let li1 = document.createElement('li');
li1.innerText = 'Mango';
ul.appendChild(li1);
let li2 = document.createElement('li');
li2.innerText = 'Pain apple';
ul.appendChild(li2);
let li3 = document.createElement('li');
li3.innerText = 'Apple';
ul.appendChild(li3);

section.appendChild(ul)


//third step add item with ....

addSection.appendChild(section);


//second approach ...

let foodSection = document.createElement('section');

foodSection.innerHTML = `
<h1>Food Section Add by JS </h1>
<ul>
    <li>Fish</li>
    <li>Meet</li>
    <li>Fruits</li>
<ul/>
`;
addSection.appendChild(foodSection);









let styles = document.querySelectorAll('section');

for(styless of styles){
    styless.style.border = '2px solid green';
    styless.style.marginTop = '10px';
    styless.style.padding = '10px';
};
