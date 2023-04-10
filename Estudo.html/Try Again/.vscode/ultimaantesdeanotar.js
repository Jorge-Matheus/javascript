let valores = [9, 3, 4, 1, 2, 5]
let procurar = valores.indexOf(9)
if (procurar == -1) {
    console.log('Número não encontrado!')
} else {
    for(let i in valores)
        console.log(`Na posição ${i} temos o valor ${valores[i]}`)
}