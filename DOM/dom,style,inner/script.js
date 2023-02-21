//module 25.5 minits 9-end for inner html or inner text ................

let inText = document.getElementById('ids')
console.log(inText);
// console.log(inHtml);
document.getElementById('ids').style.color = 'red';
let getJmm = document.getElementById('jmj').getAttribute('id');
console.log(getJmm);
let getJm = document.getElementById('jmj').getAttribute('class'); 
document.getElementById('jmj').setAttribute('title', 'Title set by js form jm');
console.log(getJm);
let classLists = document.getElementById('jmj').classList;
console.log(classLists);
console.log(classLists.remove('jm'));
console.log(classLists);
console.log(classLists.add('jmLove'));
console.log(classLists);