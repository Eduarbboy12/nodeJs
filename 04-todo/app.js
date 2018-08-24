const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        console.log(listado);

        for (let tarea of listado) {
            console.log(colors.green('========= POR HACER =========='));
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log(colors.green('============================='));
        }

        break;

    case 'actualizar':
        console.log(colors.green('actualizar'));
        break;

    default:
        console.log('comando no reconocido.')

}