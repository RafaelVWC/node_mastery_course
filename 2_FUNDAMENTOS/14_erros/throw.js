const x = '10'


// checar se x é numero

if (!Number.isInteger(x)){
    throw new Error("o valor de x não é um inteiro!")
}

console.log("Continuando o código...")

