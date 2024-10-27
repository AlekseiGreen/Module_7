//Задание 7.7.2
function calculate(a, b, operator){
    if(operator === "+"){
        return(a + b);
    }
    if(operator === "-"){
        return(a - b);
    }
    if(operator === "*"){
        return(a * b);
    }
    if(operator === "/"){
        return(a / b);
    }
    return 0;
}

console.log(calculate.apply(this, [3, 2, '+']))