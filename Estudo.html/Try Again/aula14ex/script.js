function contar() {
    let ini = document.getElementById('txti').value
    let fim = document.getElementById('txtf').value
    let passo = document.getElementById('txtp').value
    let res = document.getElementById('res')

    if (ini.lenght == 0 || fim.lenght == 0 || passo.lenght == 0) {
        window.alert('[ERRO] - Faltam Dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini)
        let f = Number(fim)
        let p = Number(passo)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c+= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }   
}