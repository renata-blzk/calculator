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
        clearDisplay();
        num2 += e.target.textContent;
        return inputText.textContent += e.target.textContent;
        };
    });
});


operateBtn.forEach((operation) => {
    operation.addEventListener('click', (e) => {
        // Case when no number is entered yet
        if (e.target.innerText != "" && num1 === "") {
            return;
        // Case when operator is clicked and num2 is filled (perform calculation)
        } else if (e.target.innerText != "" && num2 != "") {
            result = operate(num1, operator, num2);
            console.log(`${num1} ${operator} ${num2} = ${result}`);
            inputText.textContent = result;
            updateValues(); 
        // Case when result exists and no num2 (start new calculation)
        } else if (result != "" && num2 === "") {
            updateValues();
            console.log(`${num1} ${operator} ${num2} = ${result}`);
            inputText.textContent = result; // Show the result       
        }
        if (e.target.innerText != "" && num2 === ""){
            operator = e.target.textContent;
            console.log('operator is set to:', operator);
        }
    });
});

clearBtn.addEventListener('click', () => {
    //clearBtn.style.opacity = '0.85';
    num1 = "";
    num2 = "";
    operator = "";
    inputText.textContent = "";
    result = "";
});

const updateValues = () => {
    num1 = result;
    num2 = "";
    operator = "";
    result = "";
}

const clearDisplay = () => {
    if (operator != "" && num2 === "") {
        inputText.textContent = "";
    }
}
