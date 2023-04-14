// Lendo Arquivo JSON
const arquivo = require('./dados.json')

// filtrando para pegar apenas os Faturamentos Validos
const faturamentoValido = arquivo.filter(objeto => objeto.valor !== 0);

// Somando os Faturamentos
const totalFaturamento = faturamentoValido.reduce((total, objeto) => total + objeto.valor, 0);
 
// Calculando Media de Faturamento
const mediaFaturamento = totalFaturamento / faturamentoValido.length

// Calculando Dias que tiveram Faturamento Maior que a media
const diasMaiorMedia = faturamentoValido.filter((faturamentoValido) => {
    return faturamentoValido.valor > mediaFaturamento
})

// Calculando o menor Faturamento
const menorValor = faturamentoValido.reduce((min, faturamento) => {
    return faturamento.valor < min ? faturamento.valor : min;
}, faturamentoValido[0].valor)

// Calculando o maior Faturamento
const maiorValor = faturamentoValido.reduce((max, faturamento) => {
    return faturamento.valor > max ? faturamento.valor : max;
}, faturamentoValido[0].valor)

// Imprimindo os Resultados
console.log("O menor valor de faturamento ocorrido em um dia do mês foi de " + menorValor.toFixed(2) + " Reais")
console.log("______________________________________________________________________________________")
console.log("O maior valor de faturamento ocorrido em um dia do mês foi de " + maiorValor.toFixed(2) + " Reais")
console.log("______________________________________________________________________________________")
console.log("Número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi de : " + diasMaiorMedia.length + "Dias.")