const axios = require("axios");
const getLugarLatLong = async ( dir ) => {
  const encodeURL = encodeURI(dir);
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
    headers: {
      "x-rapidapi-key": "e01fdf17admshd51b8528639afb4p12157bjsn9b4d28776701"
    }
  });

  const resp = await instance.get();
  if (resp.data.Results.length === 0) {
    throw new Error(`No hay resultados para ${dir}`);
  }

  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;   
  return { direccion, lat, lng };
};


module.exports = {
    getLugarLatLong
}