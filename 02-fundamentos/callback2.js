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

let getEmpleadoById = (id, callback) => {
    let empleadoDB = empleado.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`no existe un empleado con el id: ${ id }`);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalarioByEmpleado = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`no se encontro un salario para el usuario ${ empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}

getEmpleadoById(1, (err, empleado) => {
    if (err) {
        return console.log(err)
    }

    getSalarioByEmpleado(empleado, (err, response) => {
        if (err) {
            return console.log(err);
        }
        console.log(`el salario de ${ response.nombre } es de ${ response.salario}$`);
    });

});