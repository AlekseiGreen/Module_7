//Задание 7.7.2
function calculate(a, b, operator){
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                throw new Error("Деление на ноль невозможно");
            }
            return a / b;
        default:
            throw new Error("Неправильный оператор");
    }
}

try {
    console.log(calculate.apply(null, [3, 2, '+']));
} catch (error) {
    console.error(error.message);
}