const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        description: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async ( direccion) => {
    try{
        const coords = await lugar.getLugarLatLong(direccion);
        const temp = await clima.getClima( coords.lat, coords.lng);
        return `El clima de ${ coords.direccion } es ${ temp }.`;
    }catch(e){
        return `No se pudo determinar el clinma de  ${ direccion }: ${ e }`;
    }
};

getInfo(argv.direccion)
    .then( console.log )
    .catch( console.log );