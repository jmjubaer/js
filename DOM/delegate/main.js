// let items = document.getElementsByClassName('item');
// for(let item of items){
//     item.addEventListener('click', function (event){
//         event.target.parentNode.removeChild(event.target);
//     })
// }


// delegated system`
document.getElementById('parent_container').addEventListener('click',function (event){
    event.target.parentNode.removeChild(event.target);
})


document.getElementById('addBtn').addEventListener('click', function () {
    let container = document.getElementById('parent_container');

    let li = document.createElement('li');
    li.innerText = 'This item add by js but Click to remove';
    // li.classList.add('item')
    container.appendChild(li);
})