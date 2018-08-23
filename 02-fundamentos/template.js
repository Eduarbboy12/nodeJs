let nombre = 'carlos';
let real = 'real';

console.log(`${nombre} ${real}`);

let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${nombre} ${real}`;

console.log(nombreCompleto === nombreTemplate);

function getName() {
    return `${nombre} ${real}`
}

console.log(`el nombre de: ${getName()}`);