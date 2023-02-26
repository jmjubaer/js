let country = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data));
}


let displayCountry = countries => {
    let container = document.getElementById('container');
    countries.forEach(country => {
        // console.log(country);
        let div = document.createElement('div');
        div.classList.add('jm');
        div.innerHTML = `
        <h2>Name: ${country.name.common}</h2>
        <h3>Capital: ${country.capital ? country.capital : "No Capital"}</h3>
        <button onClick = "details('${country.cca2}')">Details</button>
        `;
        container.appendChild(div);
    });
}

country();



let details = (code) => {
    let url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data[0]))
}

let displayDetails = data => {
        let countryContainer = document.getElementById('country_details');
        countryContainer.classList.add('float_tab')
        countryContainer.innerHTML = `
        <img src = "${data.flags.png}" />
        <h2>Name: ${data.name.common}</h2>
        <button onClick = "dNone()">Close</button>
        `;
};
let dNone = () => {
    let countryContainer = document.getElementById('country_details');
    countryContainer.innerHTML = "";
    countryContainer.classList.remove('float_tab')

}

