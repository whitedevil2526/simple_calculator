let currentInput = '';

function Clear() {
    currentInput = '';
    document.querySelector('.input').value = '';
}
function Back() {
    currentInput = currentInput.slice(0, -1);
    document.querySelector('.input').value = currentInput;
}

function Solve(value) {
    currentInput += value;
    document.querySelector('.input').value = currentInput;
}

function Result() {
    try {
        const expression = currentInput.replace(/X/g, '*');
        const result = eval(expression);
        currentInput = result.toString();
        document.querySelector('.input').value = currentInput;
    } catch (error) {
        document.querySelector('.input').value = 'Error';
        currentInput = '';
    }
}

for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener('click', function() {
        Solve(i.toString());
    });
}
document.getElementById('0').addEventListener('click', function() {
    Solve('0');
});
