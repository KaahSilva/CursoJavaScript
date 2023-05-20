
function calcularMedia(){
    let primeiranota = document.getElementById('nota01')
    let segundanota = document.getElementById('nota02')
    let terceiranota = document.getElementById('nota03')
    let resposta = document.getElementById('resp')

    let n1 = Number(primeiranota.value)
    let n2 = Number(segundanota.value)
    let n3 = Number(terceiranota.value)

    let media = ((n1+n2+n3)/3).toFixed(2);
    resposta.innerHTML = `A media entre suas notas é : ${media}`
}