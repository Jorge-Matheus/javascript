function somar() {
    let one = document.getElementById('txtn1').value
    let two = document.getElementById('txtn2').value
    let res = document.getElementById('res')
    let maiorn = document.getElementById('maior').value
    let n1 = Number(one)
    let n2 = Number(two)
    let c = n1 + n2
    res.innerHTML += `<br>Resultado de ${n1} + ${n2} é igual a ${c}</br>`
    
    let maior = Math.max(n1, n2)
    
    res.innerHTML += `O Maior número digitado foi ${maior}`





}