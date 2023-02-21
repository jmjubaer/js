document.getElementById('Body').addEventListener('click',function (){
    console.log("Body Click");
})
document.getElementById('Main').addEventListener('click',function (){
    console.log("Main Click");
})
document.getElementById('Section').addEventListener('click',function (){
    console.log("Section Click");
})
document.getElementById('UL').addEventListener('click',function (){
    console.log("UL Click");
})

document.getElementById('li_2').addEventListener('click', function (event){
    console.log("Li clicked");
    event.stopPropagation();
})
document.getElementById('li_3').addEventListener('click', function (event){
    console.log("Li clicked");
    event.stopImmediatePropagation();
})
document.getElementById('li_3').addEventListener('click', function (){
    console.log("Li third clicked");
})

let listItems = document.getElementsByTagName('li');
for(let listItem of listItems){
    listItem.addEventListener('click',function (){
        console.log("li clicked");
    })
}