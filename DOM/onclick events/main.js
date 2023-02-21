// approach 1 

// This is inline system in html code
/* <button onclick="document.body.style.backgroundColor = 'red'" >Red BG</button> */


//approach 2 

{/* <button onclick="bgBlue()">Blue BG</button> */}

function bgBlue(){
    document.body.style.backgroundColor = 'blue';   //best prefer
}


//approach 3

{/* <button id="green_bg">Green BG</button> */}

let greenBtn = document.getElementById('green_bg');
greenBtn.onclick = greenBg;

function greenBg(){
    document.body.style.backgroundColor = 'green';
}


// approach 4 

{/* <button id="purple_bg">Purple BG</button> */}
// document.getElementById('purple_bg').onclick = function purpleBg(){ // as your wise
document.getElementById('purple_bg').onclick = function (){
    document.body.style.backgroundColor = 'purple';
}

// approach 5....

let pinkBtn = document.getElementById('pink_bg');
pinkBtn.addEventListener('click', pinkBg);

function pinkBg(){
    document.body.style.backgroundColor = 'pink';   
}

// approach 6 ...
// you can set function name 
document.getElementById('orange_bg').addEventListener('click', function (){
    document.body.style.backgroundColor = 'orange'; //best prefer
});




// ............................................

document.getElementById('onClickBtn').addEventListener('click', function(){
    document.getElementById('onClickField').innerText = 'This is heading that set javascript by event listener';
});

function changeText(){
    document.getElementById('onClickField').innerText = 'This is heading that set javascript by onclick function';
}


// update test from input filed........
// you can do this addEvenListener use

function updateText(){
    const inputText = document.getElementById('input_field').value;
    document.getElementById('input_text').innerText = inputText;
    //if clear input field after update text
    document.getElementById('input_field').value = '';
}

function one(){
    document.getElementById('input_field').value = "I love my self";
}
function two(){
    document.getElementById('input_field').value = "He is my best friend";
}
function three(){
    document.getElementById('input_field').value = "She is my Cruse";
}
function four(){
    document.getElementById('input_field').value = "I never love any one";
}
function five(){
    document.getElementById('input_field').value = "I hate him who hate islam";
}







