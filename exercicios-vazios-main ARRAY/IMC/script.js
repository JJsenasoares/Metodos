let peso = Number(prompt("Digite seu peso"))
let altura = Number(prompt("Digite seu altura"))

function imc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2)
}

let IMC = imc(peso, altura)

alert(IMC)