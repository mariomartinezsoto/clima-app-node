const axios = require('axios')

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=24936807e3af6dddc2a361f8314341a5`)

    if (resp.data.cod === '400') {
        throw new Error(`No hay resultados para las ccordenadas, lat: ${lat} y lng ${lng}`)
    } else {
        return resp.data.main.temp
    }
}

module.exports = {
    getClima
}