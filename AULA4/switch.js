// avaliação de atendimento.

// Ótimo :D
// Bom :)
// Regular :|
// Ruim :(
// Péssimo :C

let avaliacao = Number(prompt("Digite um numer de 1 a 5")) 

switch (avaliacao) {
    case 1:
        alert("O atendimento foi avaliado como: Ótimo");
        break;

    case 2:
        alert("O atendimento foi avaliado como: Bom");
        break;
    case 3:
        alert("O atendimento foi avaliado como: Regular");
        break;
    case 4:
        alert("O atendimento foi avaliado como: Ruim");
        break;
    case 5:
        alert("O atendimento foi avaliado como: Péssimo");
        break;

    default:
        alert("Avaliação Invalida");
        break;
}