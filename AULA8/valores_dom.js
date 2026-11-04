// function calcularMedia (nota1, nota2) {
//     let media = (nota1 + nota2)/2
//     let h3 = document.querySelector('h3')
//     h3.innerHTML = `Sua média é: ${media}`
// }

const calcularMedia = () => {
    let nota1 = Number(document.querySelector('#nt1').value)
    let nota2 = Number(document.querySelector('#nt2').value)
    let media = (nota1 + nota2) / 2

    let exibir = document.querySelector('h3')
    exibir.innerHTML = `Sua média é: ${media}`
}