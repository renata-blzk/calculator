const add = (a, b) => {
    return (a + b)
}

const substract = (a, b) => {
    return (a - b);
}

const multiply = (a, b) => {
    return (a * b);
}

const divide = (a, b) => {
    return (a / b);
}

let num1;
let num2;
let operator;

const operate = (num1, operator, num2) => {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return divide(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
};

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});
