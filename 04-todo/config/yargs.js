const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la descripcion'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'descripcion del completado'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualizar el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}