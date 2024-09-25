 // Faturamento por estado
 const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Calcula o valor total de faturamento
const valorTotal = Object.values(faturamento).reduce((total, valor) => total + valor, 0);

// Função para calcular o percentual de cada estado
function calcularPercentual(estadoValor, valorTotal) {
    return (estadoValor / valorTotal * 100).toFixed(2);  // Retorna o percentual com 2 casas decimais
}

// Exibe os percentuais no HTML
document.getElementById('percentual-sp').textContent = `SP: ${calcularPercentual(faturamento.SP, valorTotal)}%`;
document.getElementById('percentual-rj').textContent = `RJ: ${calcularPercentual(faturamento.RJ, valorTotal)}%`;
document.getElementById('percentual-mg').textContent = `MG: ${calcularPercentual(faturamento.MG, valorTotal)}%`;
document.getElementById('percentual-es').textContent = `ES: ${calcularPercentual(faturamento.ES, valorTotal)}%`;
document.getElementById('percentual-outros').textContent = `Outros: ${calcularPercentual(faturamento.Outros, valorTotal)}%`;