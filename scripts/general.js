const button = document.querySelector('.search');
const countryInfo = document.querySelector('.country-name');
const casesContainer = document.querySelector('#cases-container');
const input = document.getElementById('input');
var inputValue = document.getElementById('input').value;

function getInputValue() {
    var inputValue = document.getElementById('input').value;

    if (inputValue == "") {
        button.classList.add('-error');
        setTimeout(() => {
            button.classList.remove('-error');
        }, 300)
    } else {
        count = 1;
        button.classList.add('-success');
        setTimeout(() => {
            button.classList.remove('-success');
        }, 300)
        
        fetch("https://corona.lmao.ninja/v2/countries/"+inputValue)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                document.getElementById('country').innerHTML = data.country;
                document.getElementById('activeCases').innerHTML = data.active;
                document.getElementById('totalCases').innerHTML = data.cases;
                document.getElementById('criticalCases').innerHTML = data.critical;
                document.getElementById('recoveredCases').innerHTML = data.recovered;
                document.getElementById('totalDeaths').innerHTML = data.deaths;
                document.getElementById('testsDones').innerHTML = data.tests;

                countryInfo.style.opacity = 0;
                countryInfo.classList.remove('-none');
                setTimeout(() => {
                    countryInfo.style.opacity = 1;
                }, 100)
                
                casesContainer.style.opacity = 0;
                casesContainer.classList.remove('-none');
                setTimeout(() => {
                    casesContainer.style.opacity = 1;
                }, 100)
            })
    }
}

input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        button.click();
    }
})