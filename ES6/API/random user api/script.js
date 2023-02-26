const user = () => {
    fetch('https://randomuser.me/api/')
    .then( res => res.json())
    .then( data => displayUser(data));
}

let displayUser = user => {
    console.log(user);
    let name = document.getElementById('name');
    name.innerText = user.results[0].name.title + " " + user.results[0].name.first + " " + user.results[0].name.last;

    let profiles = document.getElementById('profiles');
    profiles.src = user.results[0].picture.large;

    let gender = document.getElementById('gender');
    gender.innerText = user.results[0].gender;

    let location = document.getElementById('location');
    location.innerText = user.results[0].location.postcode + ", " + user.results[0].location.state + ", " + user.results[0].location.city + ", " + user.results[0].location.country;
} 

user();