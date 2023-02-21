document.getElementById('post_btn').addEventListener('click', function () {
    let inputText = document.getElementById('input_field').value;

    let mainField = document.getElementById('main_container');

    let p = document.createElement('p');

    p.innerText = inputText;

    mainField.appendChild(p);
    
    document.getElementById('input_field').value = '';
});