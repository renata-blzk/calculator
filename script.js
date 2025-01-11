let num1 = "";
let num2 = "";
let operator = "";
let result = "";

const add = (a, b) => {
    return result = (a + b);
}

const substract = (a, b) => {
    return result = (a - b);
}

const multiply = (a, b) => {
    return result = (a * b);
}

const divide = (a, b) => {
    return result = (a / b);
}

const operate = (num1, operator, num2) => {
    switch (operator) {
        case '+':
            return add(parseInt(num1), parseInt(num2));
        case '-':
            return substract(parseInt(num1), parseInt(num2));
        case '*':
            return multiply(parseInt(num1), parseInt(num2));
        case '/':
            return divide(parseInt(num1), parseInt(num2));
    }
};

const inputText = document.querySelector('#input');
const numBtn = document.querySelectorAll('.number');

numBtn.forEach((num) => {
    num.addEventListener('click', (e) => {
        if (operator === "") {
            num1 += e.target.textContent;
            return inputText.textContent += e.target.textContent; 
        } else {
            num2 += e.target.textContent;
            return inputText.textContent += e.target.textContent; 
        }
    });
});

const operateBtn = document.querySelectorAll('.function');

operateBtn.forEach((operation) => {
    operation.addEventListener('click', (e) => {
        if (e.target.innerText != "=") {
            operator = e.target.textContent;
            return inputText.textContent = e.target.textContent;
        } else {
            operate(num1, operator, num2);
            return inputText.textContent = result;
        }
    })
})