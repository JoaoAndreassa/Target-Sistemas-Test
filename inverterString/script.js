// Função para inverter a string
function inverterString() {
    // Obtém a string informada pelo usuário
    const str = document.getElementById('inputString').value;
    
    // Variável para armazenar a string invertida
    let stringInvertida = '';

    // Percorre a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i]; // Concatena os caracteres na ordem inversa
    }

    // Exibe o resultado
    document.getElementById('resultado').textContent = `String invertida: ${stringInvertida}`;
}