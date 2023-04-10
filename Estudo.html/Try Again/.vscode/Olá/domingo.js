function maiornum(array) {
    let MaiorNumero = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
        }
    }
    return maiorNumero
}

let numeros = [3, 7 ,2, 9, 1]
let maior = maiornum(numeros)
console.log(maior)
