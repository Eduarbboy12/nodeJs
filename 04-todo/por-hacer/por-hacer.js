const fs = require('fs');
const colors = require('colors/safe');

let listadoPorHacer = [];

let crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const guardarDB = () => {

    return new Promise((resolve, reject) => {

        let data = JSON.stringify(listadoPorHacer);

        fs.writeFile(`./db/data.json`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`data.json`);
        });
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }

}

module.exports = {
    crear,
    getListado
}