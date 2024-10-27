//Задание 7.7.3
const persons = [
    {name: 'AAA', age: 10},
    {name: 'BBB', age: 15},
    {name: 'CCC', age: 18},
    {name: 'DDD', age: 19}
];

const persons18 = persons.filter(elem=>{
    return elem.age >= 18;
});

const persons18Name = persons18.filter(elem=>{
    return delete elem.age;
});

console.log(persons18Name);