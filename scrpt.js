const temprature = document.querySelector("#temprature")
const wind = document.querySelector("#wind")
const rain = document.querySelector("#rain")

fetch("https://api.open-meteo.com/v1/forecast?latitude=55.8607&longitude=9.8503&current=temperature_2m,precipitation,wind_speed_10m&timezone=Europe%2FLondon&wind_speed_unit=ms")
    .then(response => {
        if (!response.ok)
            throw new Error()
        return response.json()
    })
    .then(setInfo => {
        temprature.textContent =(setInfo.current.temperature_2m + setInfo.current_units.temperature_2m)
        rain.textContent = (setInfo.current.precipitation + setInfo.current_units.precipitation)
        wind.textContent = (setInfo.current.wind_speed_10m + setInfo.current_units.wind_speed_10m)
    }) 
    .catch (errorFunction =>{
        temprature.textContent("error")
        wind.textContent("error")
        rain.textContent("error")
    })
