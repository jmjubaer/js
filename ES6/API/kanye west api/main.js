function quotes(){
    fetch('https://api.kanye.rest')
        .then(response => response.json())
        .then(quote => showQuotes(quote))
};

function showQuotes(quote){
    const quoteField = document.getElementById('quote_filed');
    quoteField.innerText = quote.quote;
};

quotes();