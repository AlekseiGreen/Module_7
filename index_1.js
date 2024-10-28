//Задание 7.7.1
function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person ={
    name: 'AAA',
    age: 20
}

printInfo.call(person);