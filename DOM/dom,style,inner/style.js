let divs = document.querySelectorAll('div');
for (let div of divs){
    div.style.border = '2px solid blue';
    div.style.borderRadius = '10px';
    div.style.marginBottom = '10px';
    div.style.padding = '10px';
}
document.getElementById('colors').style.background = 'lightgray';
document.getElementById('bgColors').classList.add('jm_bg');
document.getElementById('bgColors').classList.remove('jm_text');