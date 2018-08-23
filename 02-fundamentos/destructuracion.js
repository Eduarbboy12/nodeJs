let object = {
    name: 'carlos',
    lastName: 'diaz',
    power: 'Prgramar',
    getName: function() {
        return `${this.name} ${this.lastName} - poder: ${this.power}`
    }
};

console.log(object.getName());

let { name, lastName, power } = object;

console.log(name, lastName, power);