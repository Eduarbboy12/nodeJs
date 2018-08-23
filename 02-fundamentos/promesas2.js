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

let getEmpleadoById = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleado.find(empleado => empleado.id === id);

        if (!empleadoDB) {

            reject(`no existe un empleado con el id: ${ id }`);
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalarioByEmpleado = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`no se encontro un salario para el usuario ${ empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}


getEmpleadoById(10).then(empleado => {

        return getSalarioByEmpleado(empleado);

    }).then(resp => {
        console.log(`el salario de ${ resp.nombre } es de ${ resp.salario}$`);
    })
    .catch(err => console.log(err))