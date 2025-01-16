const inputText = document.querySelector('#input');
const numBtn = document.querySelectorAll('.number');
const operateBtn = document.querySelectorAll('.function');
const clearBtn = document.querySelector('.clear');
let previousBtn = null;
let num1 = "";
let num2 = "";
let operator = "";
let result = "";

const add = (a, b) => result = (a + b);
const substract = (a, b) => result = (a - b);
const multiply = (a, b) => result = (a * b);
const divide = (a, b) => (num2 === '0') ? 'nope' : result = (a / b);
    
const operate = (num1, operator, num2) => {
    switch (operator) {
        case '+':
            return add(parseFloat(num1), parseFloat(num2));
        case '-':
            return substract(parseFloat(num1), parseFloat(num2));
        case '*':
            return multiply(parseFloat(num1), parseFloat(num2));
        case '/':
            return divide(parseFloat(num1), parseFloat(num2));
    }
};

numBtn.forEach((num) => {
    num.addEventListener('click', (e) => {
            num.style.backgroundColor = '#E0BFB8';
            num.style.transition = '.25s ease';
            setTimeout(() => {
                num.style.backgroundColor = "";
            }, 170);
        
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
            operation.style.backgroundColor = "";
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
        } if (e.target.innerText != "" && num2 === ""){
            operator = e.target.textContent;
            //console.log('operator is set to:', operator);
        } if (result != "" && e.target.innerText === "=") {
            updateValues();
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

operateBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (previousBtn != null) {
            previousBtn.style.backgroundColor = "";
        }

        if (e.target.innerText === "=") {
            e.target.style.backgroundColor = '#006400';
            e.target.style.transition = '.25s ease';
            setTimeout(() => {
                e.target.style.backgroundColor = "";
            }, 200);
            previousBtn = e.target;
        } else if (e.target.innerText === "C") {
            e.target.style.backgroundColor = '#CD5C5C';
            e.target.style.transition = '.25s ease';
            setTimeout(() => {
                e.target.style.backgroundColor = "";
            }, 200);
            previousBtn = e.target;            
        } else {
            e.target.style.backgroundColor = '#f1c40f';
            e.target.style.transition = '.25s ease';
            previousBtn = e.target;
        }
    });
});
