//basic function js
// function sumar(a, b) {
//     return a + b;
// }

//arrow function js
// let sumar = (a, b) => {
//     return a + b;
// }

//arrow function short js
// let sumar = (a, b) => a + b

//console.log(sumar(10, 20));

//Exercise 1
//translate the basic function to arrow function js
console.log('/******** Exersice 1 ********/')

function saludar() {
    return 'Hello World';
}
console.log(saludar());

/* **************************** */
//Solution
let saludarJs = () => 'Solution: hello world';
console.log(saludarJs());

//Exercise 2
console.log('/******** Exersice 2 ********/')

function saludar2(name) {
    return `Hola ${ name }`;
}
console.log(saludar2('Carlos'));

//Solution
let saludarJs2 = (name2) => `Solution: Hola ${ name2 }`;
console.log(saludarJs2('Carlos'));

//Exercise 3
let deadpool = {
    nombre: 'carlos',
    apellido: 'diaz',
    poder: 'programar',
    getName() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

console.log(deadpool.getName());