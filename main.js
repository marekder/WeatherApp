import './sass/main.scss'

let cityForm = document.querySelector('.weather__form')
let cityInput = document.querySelector('.weather__city')
let APIURL = 'http://api.weatherapi.com/v1/current.json?key=d65612371be147b590e171953221512&aqi=yes&q='
let apiView = document.querySelector('.weather__data')

cityForm.addEventListener('submit', (event) => {
    let city = cityInput.value
    // console.log(city)
    if (city.length <= 3) {
        cityInput.classList.add('weather__city--error')
    } else {

        cityInput.classList.remove('weather__city--error')

        let APIURLWITHCITY = APIURL + city
        fetch(APIURLWITHCITY)
            .then((response) => response.json())
            .then((dataFromAPI) => {
                // console.log(dataFromAP.current.temp_c)
                let view = ''
                // view += `<b>${dataFromAPI.current.temp_c}</b>`
                view += `<div class="weather__location">City: ${dataFromAPI.location.name} - Country: ${dataFromAPI.location.country}</div>`

                apiView.innerHTML = view
            })
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
