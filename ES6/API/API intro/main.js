fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))

function callData (){  // as your wish
    let url = 'https://jsonplaceholder.typicode.com/users';
    // fetch('https://jsonplaceholder.typicode.com/users') // as your wise
    fetch(url)
    .then(response => response.json())
    .then(data => loadData(data))
};

function loadData(data){
    for(const user of data){
        let div = document.getElementById('container');
        let li = document.createElement('li');
        li.innerText = user.name;
        div.appendChild(li);
    }
};

function post(){
    let url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(response => response.json())
    .then(data => postData(data))
};
function postData(data){
    let postContainer = document.getElementById('post_contianer');
    for(const post of data){
        let section = document.createElement('section');
        section.classList.add('box')
        section.innerHTML = `
        <h2>User Id - ${post.userId}</h2>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(section);
    }
}
post();
