function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

function calcularFibonacci() {
    const num = parseInt(document.getElementById('num').value);
    const resultList = document.getElementById('result');
    resultList.innerHTML = '';

    if (isNaN(num) || num <= 0) {
        alert('Por favor, introduzca un número válido.');
        return;
    }

    const fibSequence = fibonacci(num);

    fibSequence.forEach(number => {
        const listItem = document.createElement('li');
        listItem.textContent = number;
        resultList.appendChild(listItem);
    });
}

function limpiar() {
    document.getElementById('num').value = '';
    document.getElementById('result').innerHTML = '';
}

function salir() {
    window.close();
}
