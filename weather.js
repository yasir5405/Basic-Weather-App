const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input').value;
    // var API_KEY = '01228c06756a4804931135302241410';
    var API_URL = `http://api.weatherapi.com/v1/current.json?key=01228c06756a4804931135302241410&q=${input}&aqi=no`;

    const citySpan = document.querySelector('#citySpan');
    const tempSpan = document.querySelector('#temp')
    if(input != ''){
        citySpan.innerHTML = input;
        citySpan.style.textDecoration = 'underline';
    }else{
        citySpan.innerHTML = 'your city';
        citySpan.style.textDecoration = 'none';
        tempSpan.innerHTML = '';
    }

    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            tempSpan.innerHTML = data.current.temp_c + ` &degC`;
        })

})