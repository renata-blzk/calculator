const inputText = document.querySelector('#input');
const numBtn = document.querySelectorAll('.number');
const operateBtn = document.querySelectorAll('.function');
const clearBtn = document.querySelector('.clear');
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
    if (num2 === '0') {
        return result = ("nope");
    }
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

numBtn.forEach((num) => {
    num.addEventListener('click', (e) => {
        if (operator === "") {
            num1 += e.target.textContent;
            return inputText.textContent += e.target.textContent; 
        } else {
            num2 += e.target.textContent;
            clearOnce();
            return inputText.textContent += e.target.textContent; 
        };
    });
});


operateBtn.forEach((operation) => {
    operation.addEventListener('click', (e) => {
        if (e.target.innerText != "=") {
            operator = e.target.textContent;
            return inputText.textContent = e.target.textContent;
        }   else {
            operate(num1, operator, num2);
            return inputText.textContent = result; 
        }
    });
});

clearBtn.addEventListener('click', () => {
    num1 = "";
    num2 = "";
    operator = "";
    inputText.textContent = "";
    result = "";
});

const clearOnce = () => {
    if (inputText.textContent === '+') {
        inputText.textContent = "";
    } else if (inputText.textContent === '-') {
        inputText.textContent = "";
    } else if (inputText.textContent === '*') {
        inputText.textContent = "";
    } else if (inputText.textContent === '/') {
        inputText.textContent = "";
    }
}


