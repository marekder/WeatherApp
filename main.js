import './sass/main.scss'

let cityForm = document.querySelector('.weather__form')
let cityInput = document.querySelector('.weather__city')

cityForm.addEventListener('submit', (event) => {
    let city = cityInput.value
    // console.log(city)
    if (city.length <= 3) {
        cityInput.classList.add('weather__city--error')
    } else {
        cityInput.classList.remove('weather__city--error')
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