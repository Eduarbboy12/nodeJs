const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        disc: 'Direccion del clima',
        demand: true
    }
}).argv

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.clima(coors.lat, coors.lng);
        return `El clima en ${ coors.direccion} es de ${ temp }`;
    } catch (e) {
        return `No se pudo determinar el clina en ${ direccion }`
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(`ERROR!! `, e))