const axios = require('axios');

const getClima = async (lat, lng) => {
    const respuesta = await axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9ed718f25ad75b4a9af129b808b596d8&units=metric`);
    return respuesta.data.main.temp;
}
module.exports = {
    getClima
};