const restCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
const displayCountries = countries => {
    console.log(countries[0]);
    const getCountries = countries.map(country => getCountriesHTML(country))
    console.log(getCountries[0])
    const singleCountries = document.getElementById("countries");
    singleCountries.innerHTML = getCountries.join('');
}
const getCountriesHTML = country => {
    return `
        <div class="single-country">
            <h2 class="head-text">${country.name}</h2>
            <img src="${country.flag}"/>
            <h3>The capital of country: <span class="text-color"> ${country.capital}</span></h3>
        </div>
    `
}
restCountries();