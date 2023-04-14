const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
} 

const objFaturamento = Object.values(faturamento)

const total = objFaturamento.reduce((total, atual) => total + atual, 0)

const percentuais = {};


for (const estado in faturamento) {
    const percentual = (faturamento[estado] / total) * 100
    percentuais[estado] = (percentual.toFixed(2) + "%")
}

console.log(percentuais)