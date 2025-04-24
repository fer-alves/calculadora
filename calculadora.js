function appendToDisplay(value) {
    const display = document.getElementById('display');
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];

    if (operators.includes(lastChar) && operators.includes(value)) {
        return;
    }

    if (display.value.length === 0 && operators.includes(value) && value !== '-') {
        return;
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const expression = display.value;

        if (/^[0-9+\-*/(). ]+$/.test(expression)) {
            const result = eval(expression);
            display.value = Number.isFinite(result) ? result : 'Erro';
        } else {
            display.value = 'Inválido';
        }
    } catch {
        display.value = 'Erro';
    }
}
