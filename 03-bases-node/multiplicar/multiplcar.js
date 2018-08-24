const fs = require('fs');

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero.`);
            return
        }

        let data = '';

        console.log('Inicio del programa');

        for (let i = 1; i <= 10; i++) {
            data += `${ base } * ${ i } = ${ base * i} \n`;
        }

        fs.writeFile(`tablas/table-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    });


}

module.exports = {
    crearArchivo
}