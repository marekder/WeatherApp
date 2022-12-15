import './sass/main.scss'

let cityForm = document.querySelector('.weather__form')
let cityInput = document.querySelector('.weather__city')
let APIURL = 'http://api.weatherapi.com/v1/current.json?key=d65612371be147b590e171953221512&aqi=yes&q='

cityForm.addEventListener('submit', (event) => {
    let city = cityInput.value
    // console.log(city)
    if (city.length <= 3) {
        cityInput.classList.add('weather__city--error')
    } else {

        cityInput.classList.remove('weather__city--error')

        let APIURLWITHCITY = APIURL + city
        fetch(APIURLWITHCITY)
        // console.log(APIURLWITHCITY)
    }

    event.preventDefault()
})

cityInput.addEventListener('keyup', () => {
    let city = cityInput.value
    if (city.length <= 3) {
        cityInput.classList.add('weather__city--error')
    } else {
        cityInput.classList.remove('weather__city--error')
    }
})
