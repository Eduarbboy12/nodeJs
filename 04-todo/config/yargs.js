const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la descripcion'
        }
    })
    .command('actualizar', 'actualizar el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la descripcion'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'descripcion del completado'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}