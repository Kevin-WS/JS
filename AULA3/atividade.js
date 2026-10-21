
// Atividade 1

let idade = Number(prompt("Digite a idade"))

if (idade >= 18 && idade <= 60) {
    console.log("Adulto")
} else if (idade > 70) {
    console.log("Idoso");

} else {
    console.log("Jovem");
}

// Atividade 2

 let idade2 = number(prompt("Digite sua idade2"))

 if (idade2 >= 18) {
     console.log("Você pode dirigir.");
 } else {
     console.log("Você ainda não pode dirigir");

 }

// Atividade 3 

let numero = Number(prompt("Digite um numero"))

if (numero >= 0) {
    window.alert("Numero Positivo")
} else {
    window.alert("Numero Negativo")
}

// Atividade 4

peso = Number(prompt("Digite seu peso."))
altura = Number(prompt("Digite sua altura."))

IMC = (altura*2) / peso

if (IMC <= 24.9 && IMC >= 18.5) {
    window.alert("Você está no intervalo saudavel")
} else  {
    window.alert("Você não está no intervalo saudavel");

}