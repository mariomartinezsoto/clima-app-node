const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion d ela ciudad para obtener',
        demand: true
    }
}).argv

console.log("BUSCANDO >>", argv.direccion);

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion)
        let temp = await clima.getClima(coors.lat, coors.lng)

        return `En clima en ${coors.direccion} es ${temp} ºC`
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err))


// lugar.getLugarLatLng(argv.direccion)
//     .then(res => {
//         console.log(res);
//         clima.getClima(res.lat, res.lng)
//             .then(temp => {
//                 console.log(`La temperatura para ${res.direccion} es ${temp} ºC`);
//             })
//             .catch(err => console.log(err))
//     })
//     .catch(err => console.log(err))