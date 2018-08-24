const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplcar');

let argv2 = process.argv;

console.log(argv.base);
console.log(argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1]


// crearArchivo(base)
//     .then(archivo => console.log(`archivo creado: ${archivo}`))
//     .catch(e => console.log(e));