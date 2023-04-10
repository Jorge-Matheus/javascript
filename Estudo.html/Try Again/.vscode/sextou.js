let numeros = [5, 10, 30, 45]
let pos = numeros.indexOf(10)
if (pos == -1) {
    console.log('Valores não encontrados')
} else {
    for(let i in numeros) {
        console.log(`Na posição ${i} tem o valor ${numeros[i]}`)
    }
}