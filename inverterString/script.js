// Função para inverter a string
function inverterString() {
  const str = document.getElementById("inputString").value;

  let stringInvertida = "";

  // Percorre a string de trás para frente
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }

  document.getElementById(
    "resultado"
  ).textContent = `String invertida: ${stringInvertida}`;
}
