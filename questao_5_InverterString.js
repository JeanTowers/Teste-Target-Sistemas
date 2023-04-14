const texto = "Torres"

// Tranformando a string em array
const arrayTXT = texto.split("")

let textoInvertido = ""

// Percorrendo o array de tras pra frente montando a nova string
for (let index = arrayTXT.length -1; index >= 0; index--) {
    textoInvertido += arrayTXT[index]
}

// Informando a nova string
console.log(textoInvertido)