const axios = require('axios');

const clima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=d6450d07decdb569eeaf5f47ab4e2511`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }

    return resp.data.main.temp

}

module.exports = {
    clima
}