//There has many event like onload,onscroll,keypress,etc..
document.getElementById('btn').addEventListener('click', function (){
    document.getElementById('event').innerText = 'This is on click event';
})
document.getElementById('btn').addEventListener('dblclick', function (){
    document.getElementById('event').innerText = 'This is on dbl click event';
})
document.getElementById('btn').addEventListener('contextmenu', function (){
    document.getElementById('event').innerText = 'This is on right click event';
})
document.getElementById('btn').addEventListener('mouseenter', function (){
    document.getElementById('event').innerText = 'This is on  mouseenter event';
})
document.getElementById('btn').addEventListener('mouseleave', function (){
    document.getElementById('event').innerText = 'This is on  mouseleave event';
})
// document.getElementById('btn').addEventListener('mousemove', function (){
//     document.getElementById('event').innerText = 'This is on  mousemove event';
// })
document.getElementById('input').addEventListener('keyup', function (){
    document.getElementById('event').innerText = 'This is on  keyup event';
})

document.getElementById('input').addEventListener('focus', function (){
    document.getElementById('event').innerText = 'This is on  focus event';
})

document.getElementById('input').addEventListener('blur', function (){
    document.getElementById('event').innerText = 'This is on  blur event';
})
document.getElementById('hide_text').addEventListener('click', function (){
    document.getElementById('event').style.visibility = 'hidden';
})
document.getElementById('show_text').addEventListener('click', function (){
    document.getElementById('event').style.visibility = 'visible';
    document.getElementById('event').style.display = 'block';
})

document.getElementById('input').addEventListener('keyup', function (event){
    let text = event.target.value;
    // console.log(text);
    let deleteBtn = document.getElementById('deleted');
    if(text.toLowerCase() == 'delete'){
          deleteBtn.removeAttribute('disabled');  
    }else{
        deleteBtn.setAttribute('disabled',true);       
    }
})
document.getElementById('deleted').addEventListener('click', function (){
    document.getElementById('event').style.display = 'none';
})


document.getElementById('change_event').addEventListener('change', function (){
    let selected = document.getElementById('change_event').value;
    document.getElementById('select_item').innerText = 'Your selected color ' + selected;
})