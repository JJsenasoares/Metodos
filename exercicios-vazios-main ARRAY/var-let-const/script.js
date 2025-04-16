/* let declara uma variavel mas não pode ser o mesmo nome declarado */

function teste() {
    if (true) {
        var a = 10
        let resultado = 20
        console.log(resultado)


    }

    let resultado = 30
    console.log(a)
    console.log(resultado)
}
teste()