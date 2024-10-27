//Задание 7.7.4
const persons = {
    firstName: 'AAA',
    lastName: 'BBB',
};

function setFullName(fullName){
    this.fullName = fullName;
}

const setPersonFullName = setFullName.bind(persons);

setPersonFullName('CCC DDD');

console.log(persons.fullName);