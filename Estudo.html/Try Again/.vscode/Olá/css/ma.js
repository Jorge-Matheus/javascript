let tabela = [10, 15, 12, 16, 22]
let posi = tabela.indexOf(10)
if (posi == -1) {
    console.log('Número não encontrado!')
} else {
    for(let i in tabela) {
        console.log(`Na posição ${i} tem o número ${tabela[i]}`)
    }
}