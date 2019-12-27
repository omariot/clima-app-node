const axios = require('axios');

const getClima = async (lat, lng) => {
   const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8c507793ab3d9bf68600f9c2a6f68214`)
   const data = resp.data.main.temp;
   return data;
}

module.exports = {
    getClima
}