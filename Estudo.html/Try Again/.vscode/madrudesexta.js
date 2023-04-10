let lista = [10, 15, 32, 45, 12]
let pos = lista.indexOf(11)
if (pos == -1) {
    console.log('Valores não encontrados!')
} else {
    for(let i in lista) {
        console.log(`Na posição ${i} temos o valor ${lista[i]}`)
    }
}