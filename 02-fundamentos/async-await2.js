let empleado = [{
    id: 1,
    nombre: 'fernado'
}, {
    id: 2,
    nombre: 'carlos'
}, {
    id: 3,
    nombre: 'eduardo'
}];

let salarios = [{
    id: 1,
    salario: 10000
}, {
    id: 2,
    salario: 20000
}];

let getEmpleadoById = async(id) => {

    let empleadoDB = empleado.find(empleado => empleado.id === id);

    if (!empleadoDB) {

        throw new Error(`no existe un empleado con el id: ${ id }`);
    } else {
        return empleadoDB;
    }
}

let getSalarioByEmpleado = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`no se encontro un salario para el usuario ${ empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }
}

let getInformacion = async(id) => {

    let empleado = await getEmpleadoById(id);
    let respuesta = await getSalarioByEmpleado(empleado)

    return `${ respuesta.nombre} tiene un salario de $${respuesta.salario}`;
}

getInformacion(1).then(mensaje => console.log(mensaje)).catch(e => console.log(e))