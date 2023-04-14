// Função para Calcular o Fibonacci
function fibonacci(n) {
    switch (n) {
        case n <= 0:
            return []
        case n === 1:
            return[0]
        case n === 2:
            return[0, 1]
        default:
            let fib = [0, 1]
            while (fib.length < n) {
                fib.push(fib[fib.length - 1] + fib[fib.length - 2])
            }
            return fib
    }
}

// Input para Pegar o numero 
const input = Number(prompt("Informe um Número inteiro: "))

// verificando se o Numero Informado faz parte do Fibonacci Calculado
const fib = fibonacci(input)

if (fib.includes(input)) {
    console.log("O numero "+ input + " pertence a sequencia fibonacci!")
    
} else {
    console.log("O numero "+ input + " não pertence a sequencia fibonacci")
}
