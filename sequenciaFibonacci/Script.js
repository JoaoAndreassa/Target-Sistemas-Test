function fibonacci(num) {
  //inicia os primeiros numeros da sequencia
  let a = 0,
    b = 1;
  //verifica se o numero é um dos primeiros da sequencia
  if (num === 0 || num === 1) {
    return true;
  }

  // gera a sequencia de fibonacci até encontrar ou ultrapassar o numero encontrado
  while (b <= num) {
    if (b === num) {
      return true;
    }
    [a, b] = [b, a + b]; //atuali os valores de 'a' e 'b'
  }
  return false;
}

//recebe um numero
const numero = parseInt(prompt("informe um numero: "), 10);
// verifica se o numero pertence á sequencia
if (fibonacci(numero)) {
  alert(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  alert(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
}
