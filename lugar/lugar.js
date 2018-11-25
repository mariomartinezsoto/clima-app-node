const axios = require('axios')

const getLugarLatLng = async(direccion) => {

    let encoudedURL = encodeURI(direccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encoudedURL}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    } else {
        let formattedAddress = resp.data.results[0].formatted_address
        let location = resp.data.results[0].geometry.location

        return {
            direccion: formattedAddress,
            lat: location.lat,
            lng: location.lng
        }
    }
}

module.exports = {
    getLugarLatLng
}