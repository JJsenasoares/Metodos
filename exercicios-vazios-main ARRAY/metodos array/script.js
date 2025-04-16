var frutas = ["Banana", "Laranja"]

/* .push() Adiciona item no final da lista*/

frutas.push("Uva")
frutas.push("Maçã")

/* .unshift Adiciona item no inicio da lista */
frutas.unshift("Manga")

/* .pop Remove o ultimo item da lista  */
frutas.pop()

/* .shift Remove o primeiro item da lista */
frutas.shift

frutas.splice(1, 1)


/* var nomeFruta = prompt("Digite o nome de uma fruta quedeseja retirar")

var indexFruta = frutas.indexOf(nomeFruta)

if (indexFruta != -1) {
    alert("Fruta não existe")
} else {
    frutas.splice(indexFruta, 1)
} */

console.log(frutas)
console.log(frutas.includes(""))