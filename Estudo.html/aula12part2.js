var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamento ${hora}.00/h`)
if (hora >= 5.00 && hora <= 12.00) {
    console.log('Bom dia!')
} else if (hora >= 12.01 && hora <= 18.00) {
    console.log('Boa Tarde!')
} else if (hora >= 18.01 && hora <= 23.59) {
    console.log('Boa Noite!')
} else {
    console.log('Boa Madrugada!')
}