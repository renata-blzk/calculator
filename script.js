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

let num1;
let num2;
let operator;

const inputText = document.querySelector('#input');
const numBtn = document.querySelectorAll('.number');

numBtn.forEach((num) => {
    num.addEventListener('click', (e) => {
        
        num1 = e.target.textContent;
        return inputText.textContent += e.target.textContent;     

    });
});
