function fibonacci(num) {
  let a = 0,
    b = 1;

  if (num === 0 || num === 1) {
    return true;
  }

  while (b <= num) {
    if (b === num) {
      return true;
    }
    [a, b] = [b, a + b]; //atuali os valores de 'a' e 'b'
  }
  return false;
}

const numero = parseInt(prompt("informe um numero: "), 10);

if (fibonacci(numero)) {
  alert(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  alert(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
}
