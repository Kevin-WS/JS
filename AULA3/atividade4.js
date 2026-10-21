// Atividade 4

peso = Number(prompt("Digite seu peso."))
altura = Number(prompt("Digite sua altura."))

IMC = (altura*2) / peso

if (IMC <= 24.9 && IMC >= 18.5) {
    window.alert("Você está no intervalo saudavel")
} else {
    window.alert("Você não está no intervalo saudavel");

}