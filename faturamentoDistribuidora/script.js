 // Exemplo de JSON com dados de faturamento diário
 const dados = {
    "faturamento": [
        {
            "dia": 1,
            "valor": 22174.1664
        },
        {
            "dia": 2,
            "valor": 24537.6698
        },
        {
            "dia": 3,
            "valor": 26139.6134
        },
        {
            "dia": 4,
            "valor": 0.0
        },
        {
            "dia": 5,
            "valor": 0.0
        },
        {
            "dia": 6,
            "valor": 26742.6612
        },
        {
            "dia": 7,
            "valor": 0.0
        },
        {
            "dia": 8,
            "valor": 42889.2258
        },
        {
            "dia": 9,
            "valor": 46251.174
        },
        {
            "dia": 10,
            "valor": 11191.4722
        },
        {
            "dia": 11,
            "valor": 0.0
        },
        {
            "dia": 12,
            "valor": 0.0
        },
        {
            "dia": 13,
            "valor": 3847.4823
        },
        {
            "dia": 14,
            "valor": 373.7838
        },
        {
            "dia": 15,
            "valor": 2659.7563
        },
        {
            "dia": 16,
            "valor": 48924.2448
        },
        {
            "dia": 17,
            "valor": 18419.2614
        },
        {
            "dia": 18,
            "valor": 0.0
        },
        {
            "dia": 19,
            "valor": 0.0
        },
        {
            "dia": 20,
            "valor": 35240.1826
        },
        {
            "dia": 21,
            "valor": 43829.1667
        },
        {
            "dia": 22,
            "valor": 18235.6852
        },
        {
            "dia": 23,
            "valor": 4355.0662
        },
        {
            "dia": 24,
            "valor": 13327.1025
        },
        {
            "dia": 25,
            "valor": 0.0
        },
        {
            "dia": 26,
            "valor": 0.0
        },
        {
            "dia": 27,
            "valor": 25681.8318
        },
        {
            "dia": 28,
            "valor": 1718.1221
        },
        {
            "dia": 29,
            "valor": 13220.495
        },
        {
            "dia": 30,
            "valor": 8414.61
        }
    ]
};

// Função para calcular o menor, maior valor e dias acima da média
function calcularFaturamento(dadosFaturamento) {
    // Filtra apenas os dias com faturamento maior que 0
    const diasComFaturamento = dadosFaturamento
        .filter(dia => dia.valor > 0)  // Remove dias sem faturamento
        .map(dia => dia.valor);        // Mapeia apenas os valores de faturamento
    
    // Se não houver dias com faturamento, retorna resultados padrão
    if (diasComFaturamento.length === 0) {
        return {
            menorFaturamento: null,
            maiorFaturamento: null,
            diasAcimaDaMedia: 0
        };
    }

    // Calcula o menor e maior valor de faturamento
    const menorFaturamento = Math.min(...diasComFaturamento);
    const maiorFaturamento = Math.max(...diasComFaturamento);

    // Calcula a média mensal (somente dias com faturamento)
    const totalFaturamento = diasComFaturamento.reduce((total, valor) => total + valor, 0);
    const mediaMensal = totalFaturamento / diasComFaturamento.length;

    // Conta os dias com faturamento superior à média
    const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

// Executa a função e obtém os resultados
const resultado = calcularFaturamento(dados.faturamento);

// Exibe os resultados na página usando elementos HTML
document.getElementById('menor-faturamento').textContent = `Menor faturamento: ${resultado.menorFaturamento}`;
document.getElementById('maior-faturamento').textContent = `Maior faturamento: ${resultado.maiorFaturamento}`;
document.getElementById('dias-acima-da-media').textContent = `Dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`;