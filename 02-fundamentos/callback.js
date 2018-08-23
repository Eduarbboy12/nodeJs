//Example
setTimeout(function() {
    console.log('Hola mundo');
}, 3000);

setTimeout(() => {
    console.log('Hola mundo');
}, 4000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'carlos',
        id
    }
    if (id === 10) {
        callback(`el usuario con id ${ id } no existe en la base de datos`);
    } else {
        callback(null, usuario)
    }
}

getUsuarioById(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('usuario de base de datos', usuario)
});